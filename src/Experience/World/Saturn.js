import * as THREE from "three"
import Experience from "../Experience.js"

import saturnVertexShader from "../../shaders/saturn/surface/vertex.glsl"
import saturnFragmentShader from "../../shaders/saturn/surface/fragment.glsl"

import atmosphereVertexShader from "../../shaders/saturn/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "../../shaders/saturn/atmosphere/fragment.glsl"

import saturnRingVertexShader from "../../shaders/saturn/ring/vertex.glsl"
import saturnRingFragmentShader from "../../shaders/saturn/ring/fragment.glsl"

export default class Saturn {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.camera = this.experience.camera

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("saturn")
    }

    // Resource
    this.saturnSurfaceTexture = this.resources.items.saturnSurfaceTexture
    this.saturnRingsTexture = this.resources.items.saturnRingTexture

    // saturn Parameters
    this.saturnParameters = {
      atmosphereColor: "#a59186",
      atmosphereTwilightColor: "#c99039",
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.saturnParameters, "atmosphereColor")
        .name("atmosphereColor")
        .onChange(() => {
          this.saturnMaterial.uniforms.uAtmosphereColor.value.set(this.saturnParameters.atmosphereColor)
        })

      this.debugFolder
        .addColor(this.saturnParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.saturnMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.saturnParameters.atmosphereTwilightColor)
        })

      this.debugFolder.add({ updateCamera: () => this.camera.setFollowTarget(this.saturn) }, "updateCamera").name("move to saturn")
    }

    // Options
    this.distanceScale = _options.distanceScale
    this.saturnSize = _options.scale
    this.timeScale = _options.timeScale

    // Common
    this.reusableVec3 = new THREE.Vector3()
    this.DAY_IN_SECONDS = 86400 // 24 * 60 * 60

    this.setSaturn()
    this.setAtmosphere()
    this.setRings()
    this.createOrbit(this.distanceScale, 100)
  }

  createOrbit(distanceScale, segments) {
    const AU = 149.6 // 1 Astronomical Unit (AU) in million km (scaled for Three.js)
    this.semiMajorAxis = 9.537 * AU * distanceScale // Scale to AU (Three.js units)
    const eccentricity = 0.0565
    const semiMinorAxis = this.semiMajorAxis * Math.sqrt(1 - eccentricity ** 2)
    const inclinationMatrix = new THREE.Matrix4().makeRotationX(THREE.MathUtils.degToRad(2.49))

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
    this.orbitalPeriod = 10759 * this.DAY_IN_SECONDS
    this.orbitalSpeed = (2 * Math.PI) / this.orbitalPeriod
  }

  setSaturn() {
    const ROTATION_SPEED = 10.7 * this.DAY_IN_SECONDS // Convert days in seconds
    this.saturnRotationSpeed = (2 * Math.PI) / ROTATION_SPEED // Convert to radians per second
    const axialTilt = THREE.MathUtils.degToRad(26.73) // Convert tilt to radians

    this.saturnGeometry = new THREE.SphereGeometry(this.saturnSize, 32, 32)
    this.saturnMaterial = new THREE.ShaderMaterial({
      vertexShader: saturnVertexShader,
      fragmentShader: saturnFragmentShader,
      uniforms: {
        uSurfaceTexture: new THREE.Uniform(this.saturnSurfaceTexture),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.saturnParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.saturnParameters.atmosphereTwilightColor)),
      },
    })
    this.saturn = new THREE.Mesh(this.saturnGeometry, this.saturnMaterial)
    this.saturn.name = "Saturn"

    this.saturn.rotation.y = axialTilt

    // Using to update the position of the planet in the shader to calculate sun direction
    this.saturnMaterial.uniforms.uPlanetPosition = new THREE.Uniform(new THREE.Vector3())

    this.scene.add(this.saturn)
  }

  setRings() {
    this.innerRadius = this.saturnSize * 1.2
    this.outerRadius = this.saturnSize * 2.5
    this.geo = new THREE.RingGeometry(this.innerRadius, this.outerRadius, 32)
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        ringTexture: { value: this.saturnRingsTexture },
        innerRadius: { value: this.innerRadius },
        outerRadius: { value: this.outerRadius },
        uPlanetPosition: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
      },
      vertexShader: saturnRingVertexShader,
      fragmentShader: saturnRingFragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
    this.rings = new THREE.Mesh(this.geo, this.mat)

    // Tilt rings to match axial tilt
    this.rings.rotation.x = THREE.MathUtils.degToRad(90 - 26.73)
    this.rings.position.copy(this.saturn.position)

    this.scene.add(this.rings)
  }

  setAtmosphere() {
    const atmosphereScale = this.saturnSize * 1.03

    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.saturnParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.saturnParameters.atmosphereTwilightColor)),
        uPlanetPosition: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
      },
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    })
    this.saturnAtmosphere = new THREE.Mesh(this.saturnGeometry, this.atmosphereMaterial)

    this.saturnAtmosphere.scale.set(atmosphereScale, atmosphereScale, atmosphereScale)
    this.saturnAtmosphere.position.copy(this.saturn.position)

    this.scene.add(this.saturnAtmosphere)
  }

  update() {
    const elapsedTime = this.time.elapsed * this.timeScale // Scale time
    const t = (elapsedTime % this.orbitalPeriod) / this.orbitalPeriod

    // update position
    this.reusableVec3.copy(this.orbitCurve.getPointAt(t))
    this.saturn.position.copy(this.reusableVec3)
    this.saturnAtmosphere.position.copy(this.reusableVec3)
    this.rings.position.copy(this.reusableVec3)

    // updating uniforms
    this.saturnMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)
    this.atmosphereMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)
    this.mat.uniforms.uPlanetPosition.value.copy(this.reusableVec3)

    // Update rotation
    this.saturn.rotation.y = elapsedTime * this.saturnRotationSpeed
  }
}
