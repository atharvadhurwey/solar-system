import * as THREE from "three"
import Experience from "../Experience.js"

import mercuryVertexShader from "../../shaders/mercury/surface/vertex.glsl"
import mercuryFragmentShader from "../../shaders/mercury/surface/fragment.glsl"

// import atmosphereVertexShader from "../../shaders/mercury/atmosphere/vertex.glsl"
// import atmosphereFragmentShader from "../../shaders/mercury/atmosphere/fragment.glsl"

export default class Mercury {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.camera = this.experience.camera

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("mercury")
    }

    // Resource
    this.mercuryTexture = this.resources.items.mercuryTexture

    // mercury Parameters
    this.mercuryParameters = {
      atmosphereColor: "#ffffff",
      atmosphereTwilightColor: "#ffffff",
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.mercuryParameters, "atmosphereColor")
        .name("atmosphereColor")
        .onChange(() => {
          this.mercuryMaterial.uniforms.uAtmosphereColor.value.set(this.mercuryParameters.atmosphereColor)
        })

      this.debugFolder
        .addColor(this.mercuryParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.mercuryMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.mercuryParameters.atmosphereTwilightColor)
        })
      this.debugFolder.add({ updateCamera: () => this.updateCamera() }, "updateCamera").name("move to mercury")
    }

    // TEMP
    // Sun Coordinates to calculate sun rays direction
    // this.mercurySpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
    // this.sunDirection = new THREE.Vector3()
    this.distanceFromSun = _options.distanceFromSun
    this.mercurySize = _options.scale
    this.timeScale = _options.timeScale

    this.setMercury()
    // this.updatemercury()
    this.createOrbit(this.distanceFromSun, 100)
  }

  createOrbit(radius, segments) {
    const AU = 149.6 // 1 Astronomical Unit (AU) in million km (scaled for Three.js)
    this.mercuryOrbit = {
      semiMajorAxis: (57.91 / AU) * radius, // Scale to AU (Three.js units)
      eccentricity: 0.2056,
      orbitalPeriod: 87.97 * 24 * 60 * 60, // Convert to seconds
      semiMinorAxis: 0,
    }

    // Calculate semi-minor axis
    this.mercuryOrbit.semiMinorAxis = this.mercuryOrbit.semiMajorAxis * Math.sqrt(1 - Math.pow(this.mercuryOrbit.eccentricity, 2))

    this.ORBIT_INCLINATION = THREE.MathUtils.degToRad(7)

    const points = []
    for (let i = 0; i <= 100; i++) {
      const angle = (i / 100) * Math.PI * 2
      const x = this.mercuryOrbit.semiMajorAxis * Math.cos(angle)
      const y = this.mercuryOrbit.semiMinorAxis * Math.sin(angle)

      // Create 3D position
      const position = new THREE.Vector3(x, 0, y)

      // Rotate around X-axis by the inclination angle
      position.applyAxisAngle(new THREE.Vector3(1, 0, 0), this.ORBIT_INCLINATION)

      points.push(position)
    }

    this.orbitCurve = new THREE.CatmullRomCurve3(points, true)
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(this.orbitCurve.getPoints(100))
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x888888 })
    const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial)
    this.scene.add(orbitLine)

    this.orbitalSpeed = (2 * Math.PI) / this.mercuryOrbit.orbitalPeriod
  }

  setMercury() {
    // Rotational Setup
    const MERCURY_ROTATION_PERIOD = 58.6 * 24 * 60 * 60 // Convert days to seconds
    this.mercuryRotationSpeed = (2 * Math.PI) / MERCURY_ROTATION_PERIOD // Radians per second
    this.axialTilt = THREE.MathUtils.degToRad(0.034) // Convert tilt to radians

    // Mesh
    this.mercuryGeometry = new THREE.SphereGeometry(this.mercurySize, 32, 32)
    this.mercuryMaterial = new THREE.ShaderMaterial({
      vertexShader: mercuryVertexShader,
      fragmentShader: mercuryFragmentShader,
      uniforms: {
        uSurfaceTexture: new THREE.Uniform(this.mercuryTexture),
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.mercuryParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.mercuryParameters.atmosphereTwilightColor)),
      },
    })
    this.mercury = new THREE.Mesh(this.mercuryGeometry, this.mercuryMaterial)

    this.mercury.position.set(this.distanceFromSun, 0, 0) // Set position along x-axis
    this.mercury.rotation.z = this.axialTilt // Tilt along Z-axis

    // Using to update the position of the planet in the shader to calculate sun direction
    this.mercuryMaterial.uniforms.uPlanetPosition = new THREE.Uniform(new THREE.Vector3())

    this.scene.add(this.mercury)
  }

  updateCamera() {
    // Move camera close to Mercury
    const mercuryPosition = this.mercury.position.clone() // Get Mercury's position
    const offset = new THREE.Vector3(0, 2, 5) // Adjust for a better view

    this.camera.instance.position.copy(mercuryPosition).add(offset)
    this.camera.instance.lookAt(mercuryPosition) // Ensure camera faces Mercury
    this.camera.controls.target.copy(mercuryPosition) // Update controls
  }

  update() {
    const elapsedTime = this.time.elapsed * this.timeScale // Scale time

    const t = (elapsedTime % this.mercuryOrbit.orbitalPeriod) / this.mercuryOrbit.orbitalPeriod
    this.mercury.position.copy(this.orbitCurve.getPointAt(t))

    // updating uniforms
    this.mercuryMaterial.uniforms.uPlanetPosition.value.copy(this.mercury.position)

    // Update rotation
    this.mercury.rotation.y = elapsedTime * this.mercuryRotationSpeed
  }
}
