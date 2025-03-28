import * as THREE from "three"
import Experience from "../Experience.js"

import neptuneVertexShader from "../../shaders/neptune/surface/vertex.glsl"
import neptuneFragmentShader from "../../shaders/neptune/surface/fragment.glsl"

import atmosphereVertexShader from "../../shaders/neptune/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "../../shaders/neptune/atmosphere/fragment.glsl"

export default class Neptune {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.camera = this.experience.camera

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("neptune")
    }

    // Resource
    this.neptuneTexture = this.resources.items.neptuneTexture

    // neptune Parameters
    this.neptuneParameters = {
      atmosphereColor: "#2b378b",
      atmosphereTwilightColor: "#1f2255",
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.neptuneParameters, "atmosphereColor")
        .name("atmosphereColor")
        .onChange(() => {
          this.neptuneMaterial.uniforms.uAtmosphereColor.value.set(this.neptuneParameters.atmosphereColor)
        })

      this.debugFolder
        .addColor(this.neptuneParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.neptuneMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.neptuneParameters.atmosphereTwilightColor)
        })

      this.debugFolder.add({ updateCamera: () => this.camera.setFollowTarget(this.neptune) }, "updateCamera").name("move to neptune")
    }

    // Options
    this.distanceScale = _options.distanceScale
    this.neptuneSize = _options.scale
    this.timeScale = _options.timeScale

    // Common
    this.reusableVec3 = new THREE.Vector3()
    this.DAY_IN_SECONDS = 86400 // 24 * 60 * 60

    this.setNeptune()
    this.setAtmosphere()
    this.createOrbit(this.distanceScale, 100)
  }

  createOrbit(distanceScale, segments) {
    const AU = 149.6 // 1 Astronomical Unit (AU) in million km (scaled for Three.js)
    this.semiMajorAxis = 30.07 * AU * distanceScale // Scale to AU (Three.js units)
    const eccentricity = 0.009
    const semiMinorAxis = this.semiMajorAxis * Math.sqrt(1 - eccentricity ** 2)
    const inclinationMatrix = new THREE.Matrix4().makeRotationX(THREE.MathUtils.degToRad(1.77))

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
    this.orbitalPeriod = 60190 * this.DAY_IN_SECONDS
    this.orbitalSpeed = (2 * Math.PI) / this.orbitalPeriod
  }

  setNeptune() {
    const ROTATION_SPEED = 16.1 * this.DAY_IN_SECONDS // Convert days in seconds
    this.neptuneRotationSpeed = (2 * Math.PI) / ROTATION_SPEED // Convert to radians per second
    const axialTilt = THREE.MathUtils.degToRad(28.3) // Convert tilt to radians

    this.neptuneGeometry = new THREE.SphereGeometry(this.neptuneSize, 32, 32)
    this.neptuneMaterial = new THREE.ShaderMaterial({
      vertexShader: neptuneVertexShader,
      fragmentShader: neptuneFragmentShader,
      uniforms: {
        uSurfaceTexture: new THREE.Uniform(this.neptuneTexture),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.neptuneParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.neptuneParameters.atmosphereTwilightColor)),
      },
    })
    this.neptuneMaterial.toneMapped = false
    this.neptune = new THREE.Mesh(this.neptuneGeometry, this.neptuneMaterial)
    this.neptune.name = "Neptune"

    this.neptune.rotation.x = axialTilt // Tilt along Z-axis

    // Using to update the position of the planet in the shader to calculate sun direction
    this.neptuneMaterial.uniforms.uPlanetPosition = new THREE.Uniform(new THREE.Vector3())

    this.scene.add(this.neptune)
  }

  setAtmosphere() {
    const atmosphereScale = this.neptuneSize * 1.04

    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uPlanetPosition: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.neptuneParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.neptuneParameters.atmosphereTwilightColor)),
      },
      side: THREE.BackSide,
      transparent: true,
    })
    this.atmosphereMaterial.toneMapped = false
    this.neptuneAtmosphere = new THREE.Mesh(this.neptuneGeometry, this.atmosphereMaterial)

    this.neptuneAtmosphere.scale.set(atmosphereScale, atmosphereScale, atmosphereScale)
    this.neptuneAtmosphere.position.copy(this.neptune.position)

    this.scene.add(this.neptuneAtmosphere)
  }

  update() {
    const elapsedTime = this.time.elapsed * this.timeScale // Scale time
    const t = (elapsedTime % this.orbitalPeriod) / this.orbitalPeriod

    // update position
    this.reusableVec3.copy(this.orbitCurve.getPointAt(t))
    this.neptune.position.copy(this.reusableVec3)
    this.neptuneAtmosphere.position.copy(this.reusableVec3)

    // updating uniforms
    this.neptuneMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)
    this.atmosphereMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)

    // Update rotation
    this.neptune.rotation.y = elapsedTime * this.neptuneRotationSpeed
  }
}
