import * as THREE from "three"
import Experience from "../Experience.js"

import earthVertexShader from "../../shaders/earth/surface/vertex.glsl"
import earthFragmentShader from "../../shaders/earth/surface/fragment.glsl"

import atmosphereVertexShader from "../../shaders/earth/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "../../shaders/earth/atmosphere/fragment.glsl"

export default class Earth {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.camera = this.experience.camera

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("earth")
    }

    // Resource
    this.earthDayTexture = this.resources.items.earthDayTexture
    this.earthNightTexture = this.resources.items.earthNightTexture
    this.earthSpecularCloudsTexture = this.resources.items.earthSpecularCloudsTexture

    // Earth Parameters
    this.earthParameters = {
      atmosphereDayColor: "#00aaff",
      atmosphereTwilightColor: "#ff6600",
      clouds: 0.8,
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.earthParameters, "atmosphereDayColor")
        .name("atmosphereDayColor")
        .onChange(() => {
          this.earthMaterial.uniforms.uAtmosphereDayColor.value.set(this.earthParameters.atmosphereDayColor)
        })

      this.debugFolder
        .addColor(this.earthParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.earthMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.earthParameters.atmosphereTwilightColor)
        })

      this.debugFolder
        .add(this.earthParameters, "clouds")
        .min(0)
        .max(1)
        .step(0.01)
        .name("clouds")
        .onChange(() => {
          this.earthMaterial.uniforms.uClouds.value = this.earthParameters.clouds
        })

      this.debugFolder.add({ updateCamera: () => this.camera.setFollowTarget(this.earth) }, "updateCamera").name("move to earth")
    }

    // Options
    this.distanceScale = _options.distanceScale
    this.earthSize = _options.planetSize
    this.timeScale = _options.timeScale

    // Common
    this.reusableVec3 = new THREE.Vector3()
    this.DAY_IN_SECONDS = 86400 // 24 * 60 * 60

    this.setEarth()
    this.setAtmosphere()
    this.createOrbit(this.distanceScale, 100 * 5)
  }

  createOrbit(distanceScale, segments) {
    const AU = 149.6 // 1 Astronomical Unit (AU) in million km (scaled for Three.js)
    this.semiMajorAxis = 1.0 * AU * distanceScale // Scale to AU (Three.js units)
    const eccentricity = 0.0167
    const semiMinorAxis = this.semiMajorAxis * Math.sqrt(1 - eccentricity ** 2)
    const inclinationMatrix = new THREE.Matrix4().makeRotationX(THREE.MathUtils.degToRad(0))

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
    this.orbitalPeriod = 365.25 * this.DAY_IN_SECONDS
    this.orbitalSpeed = (2 * Math.PI) / this.orbitalPeriod
  }

  setEarth() {
    const EARTH_ROTATION_SPEED = 23.3 * this.DAY_IN_SECONDS // Convert days in seconds
    this.earthRotationSpeed = (2 * Math.PI) / EARTH_ROTATION_SPEED // Convert to radians per second
    const axialTilt = THREE.MathUtils.degToRad(23.44) // Convert tilt to radians

    this.earthGeometry = new THREE.SphereGeometry(this.earthSize, 32, 32)
    this.earthMaterial = new THREE.ShaderMaterial({
      vertexShader: earthVertexShader,
      fragmentShader: earthFragmentShader,
      uniforms: {
        uDayTexture: new THREE.Uniform(this.earthDayTexture),
        uNightTexture: new THREE.Uniform(this.earthNightTexture),
        uSpecularCloudsTexture: new THREE.Uniform(this.earthSpecularCloudsTexture),
        uClouds: new THREE.Uniform(this.earthParameters.clouds),
        uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(this.earthParameters.atmosphereDayColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.earthParameters.atmosphereTwilightColor)),
      },
    })
    this.earth = new THREE.Mesh(this.earthGeometry, this.earthMaterial)
    this.earth.name = "Earth"

    this.earth.rotation.z = axialTilt // Tilt along Z-axis

    // Using to update the position of the planet in the shader to calculate sun direction
    this.earthMaterial.uniforms.uPlanetPosition = new THREE.Uniform(new THREE.Vector3())

    this.scene.add(this.earth)
  }

  setAtmosphere() {
    const atmosphereScale = 1.04

    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(this.earthParameters.atmosphereDayColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.earthParameters.atmosphereTwilightColor)),
        uPlanetPosition: new THREE.Uniform(new THREE.Vector3()),
      },
      side: THREE.BackSide,
      transparent: true,
    })
    this.earthAtmosphere = new THREE.Mesh(this.earthGeometry, this.atmosphereMaterial)

    this.earthAtmosphere.scale.set(atmosphereScale, atmosphereScale, atmosphereScale)
    this.earthAtmosphere.position.copy(this.earth.position)

    this.scene.add(this.earthAtmosphere)
  }

  update() {
    const elapsedTime = this.time.elapsed * this.timeScale // Scale time
    const t = (elapsedTime % this.orbitalPeriod) / this.orbitalPeriod

    // update position
    this.reusableVec3.copy(this.orbitCurve.getPointAt(t))
    this.earth.position.copy(this.reusableVec3)
    this.earthAtmosphere.position.copy(this.reusableVec3)

    // updating uniforms
    this.earthMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)
    this.atmosphereMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)

    // Update rotation
    this.earth.rotation.y = elapsedTime * this.earthRotationSpeed
  }
}
