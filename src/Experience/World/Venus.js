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

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("venus")
    }

    // Resource
    this.venusSurfaceTexture = this.resources.items.venusSurfaceTexture
    this.venusSurfaceTexture.colorSpace = THREE.SRGBColorSpace
    this.venusAtmosphereTexture = this.resources.items.venusAtmosphereTexture
    this.venusAtmosphereTexture.colorSpace = THREE.SRGBColorSpace
    this.venusAtmosphereTexture.wrapS = THREE.RepeatWrapping
    this.venusAtmosphereTexture.wrapT = THREE.RepeatWrapping

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
          this.venusMaterial.uniforms.uCloudsSpeed.value = this.venusParameters.cloudsSpeed
        })
      this.debugFolder.add({ updateCamera: () => this.updateCamera() }, "updateCamera").name("move to venus")
    }

    // TEMP
    // Sun Coordinates to calculate sun rays direction
    this.venusSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
    this.sunDirection = new THREE.Vector3()
    this.distanceFromSun = _options.distanceFromSun

    this.setVenus()
    this.setAtmosphere()
    this.updatevenus()
  }

  setVenus() {
    this.venusGeometry = new THREE.SphereGeometry(1, 32, 32)
    this.venusMaterial = new THREE.ShaderMaterial({
      vertexShader: venusVertexShader,
      fragmentShader: venusFragmentShader,
      uniforms: {
        uTime: new THREE.Uniform(0),
        uCloudsSpeed: new THREE.Uniform(this.venusParameters.cloudsSpeed),
        uSurfaceTexture: new THREE.Uniform(this.venusSurfaceTexture),
        uAtmosphereTexture: new THREE.Uniform(this.venusAtmosphereTexture),
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.venusParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.venusParameters.atmosphereTwilightColor)),
      },
      transparent: true,
    })
    this.venus = new THREE.Mesh(this.venusGeometry, this.venusMaterial)
    this.scene.add(this.venus)
  }

  setAtmosphere() {
    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.venusParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.venusParameters.atmosphereTwilightColor)),
      },
      side: THREE.BackSide,
      transparent: true,
    })
    this.venusAtmosphere = new THREE.Mesh(this.venusGeometry, this.atmosphereMaterial)
    this.venusAtmosphere.scale.set(1.04, 1.04, 1.04)
    this.venusAtmosphere.position.copy(this.venus.position)
    this.scene.add(this.venusAtmosphere)
  }

  updatevenus() {
    // Sun direction
    this.sunDirection.setFromSpherical(this.venusSpherical)

    // Debug
    this.venus.position.copy(this.sunDirection).multiplyScalar(-this.distanceFromSun)
    this.venusAtmosphere.position.copy(this.venus.position)

    // Uniforms
    this.venusMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
    this.atmosphereMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
  }

  updateCamera() {
    // move camera to venus
    this.camera.instance.lookAt(this.venus.position)
    this.camera.controls.target.copy(this.venus.position)

    this.camera.instance.position.set(-2.7293515826281833, 0.0, -15.143553872497971)
  }

  update() {
    this.venus.rotation.y = this.time.elapsed * 0.1
    this.venusMaterial.uniforms.uTime.value = this.time.elapsed
  }
}
