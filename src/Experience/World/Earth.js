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
    this.earthDayTexture.colorSpace = THREE.SRGBColorSpace
    this.earthNightTexture = this.resources.items.earthNightTexture
    this.earthNightTexture.colorSpace = THREE.SRGBColorSpace
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

      this.debugFolder.add({ updateCamera: () => this.updateCamera() }, "updateCamera").name("move to earth")
    }

    // TEMP
    // Sun Coordinates to calculate sun rays direction
    this.earthSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
    this.sunDirection = new THREE.Vector3()
    this.distanceFromSun = _options.distanceFromSun

    this.setEarth()
    this.setAtmosphere()
    this.updateEarth()
  }

  setEarth() {
    this.earthGeometry = new THREE.SphereGeometry(1, 32, 32)
    this.earthMaterial = new THREE.ShaderMaterial({
      vertexShader: earthVertexShader,
      fragmentShader: earthFragmentShader,
      uniforms: {
        uDayTexture: new THREE.Uniform(this.earthDayTexture),
        uNightTexture: new THREE.Uniform(this.earthNightTexture),
        uSpecularCloudsTexture: new THREE.Uniform(this.earthSpecularCloudsTexture),
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uClouds: new THREE.Uniform(this.earthParameters.clouds),
        uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(this.earthParameters.atmosphereDayColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.earthParameters.atmosphereTwilightColor)),
      },
    })
    this.earth = new THREE.Mesh(this.earthGeometry, this.earthMaterial)
    this.scene.add(this.earth)
  }

  setAtmosphere() {
    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(this.earthParameters.atmosphereDayColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.earthParameters.atmosphereTwilightColor)),
      },
      side: THREE.BackSide,
      transparent: true,
    })
    this.earthAtmosphere = new THREE.Mesh(this.earthGeometry, this.atmosphereMaterial)
    this.earthAtmosphere.scale.set(1.04, 1.04, 1.04)
    this.earthAtmosphere.position.copy(this.earth.position)
    this.scene.add(this.earthAtmosphere)
  }

  updateEarth() {
    // Sun direction
    this.sunDirection.setFromSpherical(this.earthSpherical)

    // Debug
    this.earth.position.copy(this.sunDirection).multiplyScalar(-this.distanceFromSun)
    this.earthAtmosphere.position.copy(this.earth.position)

    // Uniforms
    this.earthMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
    this.atmosphereMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
  }

  updateCamera() {
    // move camera to earth
    this.camera.instance.lookAt(this.earth.position)
    this.camera.controls.target.copy(this.earth.position)

    this.camera.instance.position.set(-5.310743439248728, 0.0, -20.131895985328836)
  }

  update() {
    this.earth.rotation.y = this.time.elapsed * 0.1
  }
}
