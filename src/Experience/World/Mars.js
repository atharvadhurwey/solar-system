import * as THREE from "three"
import Experience from "../Experience.js"

import marsVertexShader from "../../shaders/mars/surface/vertex.glsl"
import marsFragmentShader from "../../shaders/mars/surface/fragment.glsl"

import atmosphereVertexShader from "../../shaders/mars/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "../../shaders/mars/atmosphere/fragment.glsl"

export default class Mars {
  constructor() {
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
    this.marsTexture.colorSpace = THREE.SRGBColorSpace

    // Mars Parameters
    this.marsParameters = {
      atmosphereColor: "#ff6600",
      atmosphereTwilightColor: "#009999",
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.marsParameters, "atmosphereColor")
        .name("atmosphereColor")
        .onChange(() => {
          this.marsMaterial.uniforms.uAtmosphereDayColor.value.set(this.marsParameters.atmosphereColor)
        })

      this.debugFolder
        .addColor(this.marsParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.marsMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.marsParameters.atmosphereTwilightColor)
        })
    }

    // TEMP
    // Sun Coordinates to calculate sun rays direction
    this.marsSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
    this.sunDirection = new THREE.Vector3()

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
        uTime: { value: 0 },
        uSurfaceTexture: new THREE.Uniform(this.marsTexture),
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.marsParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.marsParameters.atmosphereTwilightColor)),
      },
    })
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
    this.marsAtmosphere = new THREE.Mesh(this.marsGeometry, this.atmosphereMaterial)
    this.marsAtmosphere.scale.set(1.04, 1.04, 1.04)
    this.marsAtmosphere.position.copy(this.mars.position)
    this.scene.add(this.marsAtmosphere)
  }

  updateMars() {
    // Sun direction
    this.sunDirection.setFromSpherical(this.marsSpherical)

    // Debug
    this.mars.position.copy(this.sunDirection).multiplyScalar(-25)
    this.marsAtmosphere.position.copy(this.mars.position)

    // Uniforms
    this.marsMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
    this.atmosphereMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)

    // move camera to mars
    this.camera.instance.lookAt(this.mars.position)
    this.camera.controls.target.copy(this.mars.position)
    this.camera.instance.position.set(-6.929043616737352, 0.4339641627957663, -25.591861446366376)
  }

  update() {
    this.mars.rotation.y = this.time.elapsed * 0.1
    this.marsMaterial.uniforms.uTime.value = this.time.elapsed
  }
}
