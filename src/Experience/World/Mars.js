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

    // TEMP
    // Sun Coordinates to calculate sun rays direction
    this.marsSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
    this.sunDirection = new THREE.Vector3()
    this.distanceFromSun = _options.distanceFromSun

    this.setMars()
    this.setAtmosphere()
    this.updateMars()
  }

  setMars() {
    this.marsGeometry = new THREE.SphereGeometry(1, 32, 32)
    this.marsMaterial = new THREE.ShaderMaterial({
      vertexShader: marsVertexShader,
      fragmentShader: marsFragmentShader,
      uniforms: {
        uSurfaceTexture: new THREE.Uniform(this.marsTexture),
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.marsParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.marsParameters.atmosphereTwilightColor)),
      },
    })
    this.marsMaterial.toneMapped = false
    this.mars = new THREE.Mesh(this.marsGeometry, this.marsMaterial)
    this.scene.add(this.mars)
  }

  setAtmosphere() {
    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.marsParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.marsParameters.atmosphereTwilightColor)),
      },
      side: THREE.BackSide,
      transparent: true,
    })
    this.atmosphereMaterial.toneMapped = false
    this.marsAtmosphere = new THREE.Mesh(this.marsGeometry, this.atmosphereMaterial)
    this.marsAtmosphere.scale.set(1.04, 1.04, 1.04)
    this.marsAtmosphere.position.copy(this.mars.position)
    this.scene.add(this.marsAtmosphere)
  }

  updateMars() {
    // Sun direction
    this.sunDirection.setFromSpherical(this.marsSpherical)

    // Debug
    this.mars.position.copy(this.sunDirection).multiplyScalar(-this.distanceFromSun)
    this.marsAtmosphere.position.copy(this.mars.position)

    // Uniforms
    this.marsMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
    this.atmosphereMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
  }

  updateCamera() {
    // move camera to mars
    this.camera.instance.lookAt(this.mars.position)
    this.camera.controls.target.copy(this.mars.position)

    this.camera.instance.position.set(-9.164453521070085, 0.0, -27.26908420201103)
  }

  update() {
    this.mars.rotation.y = this.time.elapsed * 0.1
  }
}
