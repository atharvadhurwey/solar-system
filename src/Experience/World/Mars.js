import * as THREE from "three"
import Experience from "../Experience.js"

import marsVertexShader from "../../shaders/mars/surface/vertex.glsl"
import marsFragmentShader from "../../shaders/mars/surface/fragment.glsl"

import atmosphereVertexShader from "../../shaders/mars/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "../../shaders/mars/atmosphere/fragment.glsl"

export default class Mars {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.camera = this.experience.camera

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("mars")
    }

    // Resource
    this.marsTexture = this.resources.items.marsTexture

    // Mars Parameters
    this.marsParameters = {
      atmosphereColor: "#c1440e",
      atmosphereTwilightColor: "#009999",
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.marsParameters, "atmosphereColor")
        .name("atmosphereColor")
        .onChange(() => {
          this.marsMaterial.uniforms.uAtmosphereColor.value.set(this.marsParameters.atmosphereColor)
        })

      this.debugFolder
        .addColor(this.marsParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.marsMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.marsParameters.atmosphereTwilightColor)
        })

      this.debugFolder.add({ updateCamera: () => this.updateCamera() }, "updateCamera").name("move to mars")
    }

    // Options
    this.distanceScale = _options.distanceScale
    this.marsSize = _options.scale
    this.timeScale = _options.timeScale

    // Common
    this.reusableVec3 = new THREE.Vector3()
    this.DAY_IN_SECONDS = 86400 // 24 * 60 * 60

    this.setMars()
    this.setAtmosphere()
    this.createOrbit(this.distanceScale, 100)
  }

  createOrbit(distanceScale, segments) {
    const AU = 149.6 // 1 Astronomical Unit (AU) in million km (scaled for Three.js)
    this.semiMajorAxis = 1.524 * AU * distanceScale // Scale to AU (Three.js units)
    const eccentricity = 0.0934
    const semiMinorAxis = this.semiMajorAxis * Math.sqrt(1 - eccentricity ** 2)
    const inclinationMatrix = new THREE.Matrix4().makeRotationX(THREE.MathUtils.degToRad(1.85))

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
    this.orbitalPeriod = 687 * this.DAY_IN_SECONDS
    this.orbitalSpeed = (2 * Math.PI) / this.orbitalPeriod
  }

  setMars() {
    const MARS_ROTATION_SPEED = 23.3 * this.DAY_IN_SECONDS // Convert days in seconds
    this.marsRotationSpeed = (2 * Math.PI) / MARS_ROTATION_SPEED // Convert to radians per second
    const axialTilt = THREE.MathUtils.degToRad(23.44) // Convert tilt to radians

    this.marsGeometry = new THREE.SphereGeometry(this.marsSize, 32, 32)
    this.marsMaterial = new THREE.ShaderMaterial({
      vertexShader: marsVertexShader,
      fragmentShader: marsFragmentShader,
      uniforms: {
        uSurfaceTexture: new THREE.Uniform(this.marsTexture),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.marsParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.marsParameters.atmosphereTwilightColor)),
      },
    })
    this.marsMaterial.toneMapped = false
    this.mars = new THREE.Mesh(this.marsGeometry, this.marsMaterial)

    this.mars.rotation.z = axialTilt // Tilt along Z-axis

    // Using to update the position of the planet in the shader to calculate sun direction
    this.marsMaterial.uniforms.uPlanetPosition = new THREE.Uniform(new THREE.Vector3())

    this.scene.add(this.mars)
  }

  setAtmosphere() {
    const atmosphereScale = this.marsSize * 1.04

    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.marsParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.marsParameters.atmosphereTwilightColor)),
        uPlanetPosition: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
      },
      side: THREE.BackSide,
      transparent: true,
    })
    this.atmosphereMaterial.toneMapped = false
    this.marsAtmosphere = new THREE.Mesh(this.marsGeometry, this.atmosphereMaterial)

    this.marsAtmosphere.scale.set(atmosphereScale, atmosphereScale, atmosphereScale)
    this.marsAtmosphere.position.copy(this.mars.position)

    this.scene.add(this.marsAtmosphere)
  }

  updateCamera() {
    // Move camera close to mars
    const marsPosition = this.mars.position.clone() // Get mars's position
    const offset = new THREE.Vector3(0, 2, 5) // Adjust for a better view

    this.camera.instance.position.copy(marsPosition).add(offset)
    this.camera.instance.lookAt(marsPosition) // Ensure camera faces mars
    this.camera.controls.target.copy(marsPosition) // Update controls
  }

  update() {
    const elapsedTime = this.time.elapsed * this.timeScale // Scale time
    const t = (elapsedTime % this.orbitalPeriod) / this.orbitalPeriod

    // update position
    this.reusableVec3.copy(this.orbitCurve.getPointAt(t))
    this.mars.position.copy(this.reusableVec3)
    this.marsAtmosphere.position.copy(this.reusableVec3)

    // updating uniforms
    this.marsMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)
    this.atmosphereMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)

    // Update rotation
    this.mars.rotation.y = elapsedTime * this.marsRotationSpeed
  }
}
