import * as THREE from "three"
import Experience from "../Experience.js"

import jupiterVertexShader from "../../shaders/jupiter/surface/vertex.glsl"
import jupiterFragmentShader from "../../shaders/jupiter/surface/fragment.glsl"

import atmosphereVertexShader from "../../shaders/jupiter/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "../../shaders/jupiter/atmosphere/fragment.glsl"

export default class Jupiter {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.camera = this.experience.camera

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("jupiter")
    }

    // Resource
    this.jupiterTexture = this.resources.items.jupiterTexture

    // jupiter Parameters
    this.jupiterParameters = {
      atmosphereColor: "#a59186",
      atmosphereTwilightColor: "#c99039",
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.jupiterParameters, "atmosphereColor")
        .name("atmosphereColor")
        .onChange(() => {
          this.jupiterMaterial.uniforms.uAtmosphereColor.value.set(this.jupiterParameters.atmosphereColor)
        })

      this.debugFolder
        .addColor(this.jupiterParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.jupiterMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.jupiterParameters.atmosphereTwilightColor)
        })

      this.debugFolder.add({ updateCamera: () => this.camera.setFollowTarget(this.jupiter) }, "updateCamera").name("move to jupiter")
    }

    // Options
    this.distanceScale = _options.distanceScale
    this.jupiterSize = _options.scale
    this.timeScale = _options.timeScale

    // Common
    this.reusableVec3 = new THREE.Vector3()
    this.DAY_IN_SECONDS = 86400 // 24 * 60 * 60

    this.setJupiter()
    this.setAtmosphere()
    this.createOrbit(this.distanceScale, 100)
  }

  createOrbit(distanceScale, segments) {
    const AU = 149.6 // 1 Astronomical Unit (AU) in million km (scaled for Three.js)
    this.semiMajorAxis = 5.204 * AU * distanceScale // Scale to AU (Three.js units)
    const eccentricity = 0.0489
    const semiMinorAxis = this.semiMajorAxis * Math.sqrt(1 - eccentricity ** 2)
    const inclinationMatrix = new THREE.Matrix4().makeRotationX(THREE.MathUtils.degToRad(1.31))

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
    this.orbitalPeriod = 4333 * this.DAY_IN_SECONDS
    this.orbitalSpeed = (2 * Math.PI) / this.orbitalPeriod
  }

  setJupiter() {
    const JUPITER_ROTATION_SPEED = 9.93 * this.DAY_IN_SECONDS // Convert days in seconds
    this.jupiterRotationSpeed = (2 * Math.PI) / JUPITER_ROTATION_SPEED // Convert to radians per second
    const axialTilt = THREE.MathUtils.degToRad(3.13) // Convert tilt to radians

    this.jupiterGeometry = new THREE.SphereGeometry(this.jupiterSize, 32, 32)
    this.jupiterMaterial = new THREE.ShaderMaterial({
      vertexShader: jupiterVertexShader,
      fragmentShader: jupiterFragmentShader,
      uniforms: {
        uSurfaceTexture: new THREE.Uniform(this.jupiterTexture),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.jupiterParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.jupiterParameters.atmosphereTwilightColor)),
      },
    })
    this.jupiter = new THREE.Mesh(this.jupiterGeometry, this.jupiterMaterial)
    this.jupiter.name = "Jupiter"

    this.jupiter.rotation.z = axialTilt // Tilt along Z-axis

    // Using to update the position of the planet in the shader to calculate sun direction
    this.jupiterMaterial.uniforms.uPlanetPosition = new THREE.Uniform(new THREE.Vector3())

    this.scene.add(this.jupiter)
  }

  setAtmosphere() {
    const atmosphereScale = this.jupiterSize * 1.04

    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.jupiterParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.jupiterParameters.atmosphereTwilightColor)),
        uPlanetPosition: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
      },
      side: THREE.BackSide,
      transparent: true,
    })
    this.jupiterAtmosphere = new THREE.Mesh(this.jupiterGeometry, this.atmosphereMaterial)

    this.jupiterAtmosphere.scale.set(atmosphereScale, atmosphereScale, atmosphereScale)
    this.jupiterAtmosphere.position.copy(this.jupiter.position)

    this.scene.add(this.jupiterAtmosphere)
  }

  update() {
    const elapsedTime = this.time.elapsed * this.timeScale // Scale time
    const t = (elapsedTime % this.orbitalPeriod) / this.orbitalPeriod

    // update position
    this.reusableVec3.copy(this.orbitCurve.getPointAt(t))
    this.jupiter.position.copy(this.reusableVec3)
    this.jupiterAtmosphere.position.copy(this.reusableVec3)

    // updating uniforms
    this.jupiterMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)
    this.atmosphereMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)

    // Update rotation
    this.jupiter.rotation.y = elapsedTime * this.jupiterRotationSpeed
  }
}
