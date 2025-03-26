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
    this.mercurySpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
    this.sunDirection = new THREE.Vector3()
    this.distanceFromSun = _options.distanceFromSun

    this.setmercury()
    this.updatemercury()
  }

  setmercury() {
    this.mercuryGeometry = new THREE.SphereGeometry(1, 32, 32)
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
    this.scene.add(this.mercury)
  }

  updatemercury() {
    // Sun direction
    this.sunDirection.setFromSpherical(this.mercurySpherical)

    this.mercury.position.copy(this.sunDirection)
    this.mercury.position.copy(this.sunDirection).multiplyScalar(-this.distanceFromSun)

    // Uniforms
    this.mercuryMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
  }

  updateCamera() {
    // move camera to mercury
    this.camera.instance.lookAt(this.mercury.position)
    this.camera.controls.target.copy(this.mercury.position)
    this.camera.instance.position.set(1.8301480476870324, 0.0, -6.884785366823811)
  }

  update() {
    this.mercury.rotation.y = this.time.elapsed * 0.1
  }
}
