import * as THREE from "three"
import Experience from "../Experience.js"

import uranusVertexShader from "../../shaders/uranus/surface/vertex.glsl"
import uranusFragmentShader from "../../shaders/uranus/surface/fragment.glsl"

import uranusRingVertexShader from "../../shaders/uranus/ring/vertex.glsl"
import uranusRingFragmentShader from "../../shaders/uranus/ring/fragment.glsl"

import atmosphereVertexShader from "../../shaders/uranus/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "../../shaders/uranus/atmosphere/fragment.glsl"

export default class Uranus {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.camera = this.experience.camera

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("uranus")
    }

    // Resource
    this.uranusTexture = this.resources.items.uranusTexture
    this.uranusRingTexture = this.resources.items.uranusRingTexture

    // uranus Parameters
    this.uranusParameters = {
      atmosphereColor: "#5eade7",
      atmosphereTwilightColor: "#3688ce",
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.uranusParameters, "atmosphereColor")
        .name("atmosphereColor")
        .onChange(() => {
          this.uranusMaterial.uniforms.uAtmosphereColor.value.set(this.uranusParameters.atmosphereColor)
        })

      this.debugFolder
        .addColor(this.uranusParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.uranusMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.uranusParameters.atmosphereTwilightColor)
        })

      this.debugFolder.add({ updateCamera: () => this.camera.setFollowTarget(this.uranus) }, "updateCamera").name("move to uranus")
    }

    // Options
    this.distanceScale = _options.distanceScale
    this.uranusSize = _options.scale
    this.timeScale = _options.timeScale

    // Common
    this.reusableVec3 = new THREE.Vector3()
    this.DAY_IN_SECONDS = 86400 // 24 * 60 * 60

    this.setUranus()
    this.setAtmosphere()
    this.setRings()
    this.createOrbit(this.distanceScale, 100)
  }

  createOrbit(distanceScale, segments) {
    const AU = 149.6 // 1 Astronomical Unit (AU) in million km (scaled for Three.js)
    this.semiMajorAxis = 19.191 * AU * distanceScale // Scale to AU (Three.js units)
    const eccentricity = 0.046
    const semiMinorAxis = this.semiMajorAxis * Math.sqrt(1 - eccentricity ** 2)
    const inclinationMatrix = new THREE.Matrix4().makeRotationX(THREE.MathUtils.degToRad(0.77))

    const points = []
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      this.reusableVec3.set(this.semiMajorAxis * Math.cos(angle), 0, semiMinorAxis * Math.sin(angle))
      this.reusableVec3.applyMatrix4(inclinationMatrix) // Apply inclination in one step
      points.push(this.reusableVec3.clone()) // Clone to avoid overwriting
    }

    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points)
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x888888 })
    const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial)
    this.scene.add(orbitLine)

    this.orbitCurve = new THREE.CatmullRomCurve3(points)

    // Set orbital period and speed
    this.orbitalPeriod = 30687 * this.DAY_IN_SECONDS
    this.orbitalSpeed = (2 * Math.PI) / this.orbitalPeriod
  }

  setUranus() {
    const ROTATION_SPEED = 17.2 * this.DAY_IN_SECONDS // Convert days in seconds
    this.uranusRotationSpeed = (2 * Math.PI) / ROTATION_SPEED // Convert to radians per second
    const axialTilt = THREE.MathUtils.degToRad(97.8) // Convert tilt to radians

    this.uranusGeometry = new THREE.SphereGeometry(this.uranusSize, 32, 32)
    this.uranusMaterial = new THREE.ShaderMaterial({
      vertexShader: uranusVertexShader,
      fragmentShader: uranusFragmentShader,
      uniforms: {
        uSurfaceTexture: new THREE.Uniform(this.uranusTexture),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.uranusParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.uranusParameters.atmosphereTwilightColor)),
      },
    })
    this.uranus = new THREE.Mesh(this.uranusGeometry, this.uranusMaterial)
    this.uranus.name = "Uranus"

    this.uranus.rotation.x = axialTilt

    // Using to update the position of the planet in the shader to calculate sun direction
    this.uranusMaterial.uniforms.uPlanetPosition = new THREE.Uniform(new THREE.Vector3())

    this.scene.add(this.uranus)
  }

  setRings() {
    this.innerRadius = this.uranusSize * 1.3
    this.outerRadius = this.uranusSize * 1.8
    this.geo = new THREE.RingGeometry(this.innerRadius, this.outerRadius, 32)
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        ringTexture: { value: this.uranusRingTexture },
        innerRadius: { value: this.innerRadius },
        outerRadius: { value: this.outerRadius },
        uPlanetPosition: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
      },
      vertexShader: uranusRingVertexShader,
      fragmentShader: uranusRingFragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
    this.rings = new THREE.Mesh(this.geo, this.mat)

    // Tilt rings to match Uranus’ extreme tilt
    this.rings.rotation.x = THREE.MathUtils.degToRad(90)
    this.rings.position.copy(this.uranus.position)

    this.scene.add(this.rings)
  }

  setAtmosphere() {
    const atmosphereScale = this.uranusSize * 1.04

    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uPlanetPosition: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.uranusParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.uranusParameters.atmosphereTwilightColor)),
      },
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    })
    this.atmosphereMaterial.toneMapped = false
    this.uranusAtmosphere = new THREE.Mesh(this.uranusGeometry, this.atmosphereMaterial)

    this.uranusAtmosphere.scale.set(atmosphereScale, atmosphereScale, atmosphereScale)
    this.uranusAtmosphere.position.copy(this.uranus.position)

    this.scene.add(this.uranusAtmosphere)
  }

  update() {
    const elapsedTime = this.time.elapsed * this.timeScale // Scale time
    const t = (elapsedTime % this.orbitalPeriod) / this.orbitalPeriod

    // update position
    this.reusableVec3.copy(this.orbitCurve.getPointAt(t))
    this.uranus.position.copy(this.reusableVec3)
    this.uranusAtmosphere.position.copy(this.reusableVec3)
    this.rings.position.copy(this.reusableVec3)

    // updating uniforms
    this.uranusMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)
    this.atmosphereMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)
    this.mat.uniforms.uPlanetPosition.value.copy(this.reusableVec3)

    // Update rotation
    this.uranus.rotation.y = elapsedTime * this.uranusRotationSpeed
  }
}
