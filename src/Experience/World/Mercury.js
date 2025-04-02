import * as THREE from "three"
import Experience from "../Experience.js"

import mercuryVertexShader from "../../shaders/mercury/surface/vertex.glsl"
import mercuryFragmentShader from "../../shaders/mercury/surface/fragment.glsl"

export default class Mercury {
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
      this.debugFolder = this.debug.ui.addFolder("mercury")
    }

    // Resource
    this.mercuryTexture = this.resources.items.mercuryTexture

    // debug
    if (this.debug.active) {
      this.debugFolder
        .add(
          {
            updateCamera: () => this.camera.setFollowTarget(this.mercury),
          },
          "updateCamera"
        )
        .name("move to mercury")
    }

    // Options
    this.distanceScale = _options.distanceScale
    this.mercurySize = _options.planetSize
    this.timeScale = _options.timeScale

    // Common
    this.reusableVec3 = new THREE.Vector3()
    this.DAY_IN_SECONDS = 86400 // 24 * 60 * 60

    // Setup
    this.setMercury()
    this.createOrbit(this.distanceScale, 100 * 5)
    this.selectionDisc = this.planet.createSelectionDisc(this.mercury, 0x888888)
    this.experience.raycaster.addPlanet(this.selectionDisc) // Register the planet for raycasting
    this.experience.raycaster.addPlanet(this.mercury)
  }

  createOrbit(distanceScale, segments) {
    const AU = 149.6 // 1 Astronomical Unit (AU) in million km (scaled for Three.js)
    const semiMajorAxis = 0.387 * AU * distanceScale // Scale to AU (Three.js units)
    const eccentricity = 0.2056
    const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity ** 2)
    const inclinationMatrix = new THREE.Matrix4().makeRotationX(THREE.MathUtils.degToRad(7))

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

    this.orbitalPeriod = 87.97 * this.DAY_IN_SECONDS // Convert to seconds
    this.orbitalSpeed = (2 * Math.PI) / this.orbitalPeriod
  }

  setMercury() {
    // Rotational Setup
    const MERCURY_ROTATION_PERIOD = 58.6 * this.DAY_IN_SECONDS // Convert days to seconds
    this.mercuryRotationSpeed = (2 * Math.PI) / MERCURY_ROTATION_PERIOD // Radians per second
    const axialTilt = THREE.MathUtils.degToRad(0.034) // Convert tilt to radians

    // Mesh
    this.mercuryGeometry = new THREE.SphereGeometry(this.mercurySize, 32, 32)
    this.mercuryMaterial = new THREE.ShaderMaterial({
      vertexShader: mercuryVertexShader,
      fragmentShader: mercuryFragmentShader,
      uniforms: {
        uSurfaceTexture: new THREE.Uniform(this.mercuryTexture),
        // uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.mercuryParameters.atmosphereColor)),
        // uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.mercuryParameters.atmosphereTwilightColor)),
      },
    })
    this.mercury = new THREE.Mesh(this.mercuryGeometry, this.mercuryMaterial)
    this.mercury.name = "Mercury"

    this.mercury.rotation.z = axialTilt // Tilt along Z-axis

    // Using to update the position of the planet in the shader to calculate sun direction
    this.mercuryMaterial.uniforms.uPlanetPosition = new THREE.Uniform(new THREE.Vector3())

    this.scene.add(this.mercury)
  }

  update() {
    const elapsedTime = this.time.elapsed * this.timeScale // Scale time
    const t = (elapsedTime % this.orbitalPeriod) / this.orbitalPeriod

    // update position
    this.reusableVec3.copy(this.orbitCurve.getPointAt(t))
    this.mercury.position.copy(this.reusableVec3)

    // update ring
    this.selectionDisc.position.copy(this.reusableVec3)
    this.selectionDisc.lookAt(this.camera.instance.position) // Always face the camera

    // Update the ring scale based on distance from the camera
    const distance = this.camera.instance.position.distanceTo(this.mercury.position)
    this.planet.updatePlanet(this.selectionDisc, distance)

    // updating uniforms
    this.mercuryMaterial.uniforms.uPlanetPosition.value.copy(this.reusableVec3)

    // Update rotation
    this.mercury.rotation.y = elapsedTime * this.mercuryRotationSpeed
  }
}
