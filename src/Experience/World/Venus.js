import * as THREE from "three"
import Experience from "../Experience.js"

import venusVertexShader from "../../shaders/venus/surface/vertex.glsl"
import venusFragmentShader from "../../shaders/venus/surface/fragment.glsl"

import atmosphereVertexShader from "../../shaders/venus/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "../../shaders/venus/atmosphere/fragment.glsl"

export default class Venus {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.camera = this.experience.camera
    this.planet = this.experience.planet

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("venus")
    }

    // Resource
    this.venusSurfaceTexture = this.resources.items.venusSurfaceTexture
    this.venusAtmosphereTexture = this.resources.items.venusAtmosphereTexture

    // venus Parameters
    this.venusParameters = {
      atmosphereColor: "#e7a921",
      atmosphereTwilightColor: "#a14601",
      cloudsSpeed: 0.005,
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.venusParameters, "atmosphereColor")
        .name("atmosphereColor")
        .onChange(() => {
          this.venusMaterial.uniforms.uAtmosphereColor.value.set(this.venusParameters.atmosphereColor)
        })

      this.debugFolder
        .addColor(this.venusParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.venusMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.venusParameters.atmosphereTwilightColor)
        })
      this.debugFolder
        .add(this.venusParameters, "cloudsSpeed")
        .min(0)
        .max(0.01)
        .step(0.0001)
        .name("cloudsSpeed")
        .onChange(() => {
          this.venusMaterial.uniforms.uCloudsSpeed.value = this.venusParameters.cloudsSpeed / this.timeScale
        })
      this.debugFolder.add({ updateCamera: () => this.camera.setFollowTarget(this.venus) }, "updateCamera").name("move to venus")
    }

    // Options
    this.distanceScale = _options.distanceScale
    this.venusSize = _options.planetSize
    this.timeScale = _options.timeScale

    // Common
    this.reusableVec3 = new THREE.Vector3()
    this.DAY_IN_SECONDS = 86400 // 24 * 60 * 60

    // Setup
    this.setVenus()
    this.setAtmosphere()
    this.createOrbit(this.distanceScale, 100 * 5)
    this.selectionDisc = this.planet.createSelectionDisc(this.venus, 0x888888)
    this.experience.raycaster.addPlanet(this.selectionDisc) // Register the planet for raycasting
    this.experience.raycaster.addPlanet(this.venus)
  }

  createOrbit(distanceScale, segments) {
    const AU = 149.6 // 1 Astronomical Unit (AU) in million km (scaled for Three.js)
    const semiMajorAxis = 0.723 * AU * distanceScale // Scale to AU (Three.js units)
    const eccentricity = 0.0067
    const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity ** 2)
    const inclinationMatrix = new THREE.Matrix4().makeRotationX(THREE.MathUtils.degToRad(3.39))

    const points = []
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      this.reusableVec3.set(semiMajorAxis * Math.cos(angle), 0, semiMinorAxis * Math.sin(angle))
      this.reusableVec3.applyMatrix4(inclinationMatrix) // Apply inclination in one step
      points.push(this.reusableVec3.clone()) // Clone to avoid overwriting
    }

    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points)
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x888888 })
    const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial)
    this.scene.add(orbitLine)

    this.orbitCurve = new THREE.CatmullRomCurve3(points)

    // Set orbital period and speed
    this.orbitalPeriod = 225 * this.DAY_IN_SECONDS
    this.orbitalSpeed = (2 * Math.PI) / this.orbitalPeriod
  }

  setVenus() {
    const VENUS_ROTATION_PERIOD = 243 * this.DAY_IN_SECONDS // Convert days to seconds
    this.venusRotationSpeed = -(2 * Math.PI) / VENUS_ROTATION_PERIOD // Negative for retrograde
    const axialTilt = THREE.MathUtils.degToRad(177.4) // Convert tilt to radians

    this.venusGeometry = new THREE.SphereGeometry(this.venusSize, 32, 32)
    this.venusMaterial = new THREE.ShaderMaterial({
      vertexShader: venusVertexShader,
      fragmentShader: venusFragmentShader,
      uniforms: {
        uTime: new THREE.Uniform(0),
        uCloudsSpeed: new THREE.Uniform(this.venusParameters.cloudsSpeed / this.timeScale),
        uSurfaceTexture: new THREE.Uniform(this.venusSurfaceTexture),
        uAtmosphereTexture: new THREE.Uniform(this.venusAtmosphereTexture),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.venusParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.venusParameters.atmosphereTwilightColor)),
      },
      transparent: true,
    })
    this.venus = new THREE.Mesh(this.venusGeometry, this.venusMaterial)
    this.venus.name = "Venus"

    this.venus.rotation.z = axialTilt // Tilt along Z-axis

    // Using to update the position of the planet in the shader to calculate sun direction
    this.venusMaterial.uniforms.uPlanetPosition = new THREE.Uniform(new THREE.Vector3())

    this.scene.add(this.venus)
  }

  setAtmosphere() {
    const atmosphereScale = 1.04

    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.venusParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.venusParameters.atmosphereTwilightColor)),
        uPlanetPosition: new THREE.Uniform(new THREE.Vector3()),
      },
      side: THREE.BackSide,
      transparent: true,
    })
    this.venusAtmosphere = new THREE.Mesh(this.venusGeometry, this.atmosphereMaterial)

    this.venusAtmosphere.scale.set(atmosphereScale, atmosphereScale, atmosphereScale)
    this.venusAtmosphere.position.copy(this.venus.position)

    this.scene.add(this.venusAtmosphere)
  }

  update() {
    const elapsedTime = this.time.elapsed * this.timeScale // Scale time
    const t = (elapsedTime % this.orbitalPeriod) / this.orbitalPeriod

    // update position
    this.reusableVec3.copy(this.orbitCurve.getPointAt(t))
    this.venus.position.copy(this.reusableVec3)
    this.venusAtmosphere.position.copy(this.reusableVec3)

    // update disc
    this.selectionDisc.position.copy(this.reusableVec3)
    this.selectionDisc.lookAt(this.camera.instance.position) // Always face the camera

    // Update the disc scale based on distance from the camera
    const distance = this.camera.instance.position.distanceTo(this.venus.position)
    this.planet.updatePlanet(this.selectionDisc, distance)

    // updating uniforms
    this.venusMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)
    this.atmosphereMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)
    this.venusMaterial.uniforms.uTime.value = elapsedTime

    // Update rotation
    this.venus.rotation.y = elapsedTime * this.venusRotationSpeed
  }
}
