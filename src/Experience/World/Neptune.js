import * as THREE from "three"
import Experience from "../Experience.js"

import neptuneVertexShader from "../../shaders/neptune/surface/vertex.glsl"
import neptuneFragmentShader from "../../shaders/neptune/surface/fragment.glsl"

import atmosphereVertexShader from "../../shaders/neptune/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "../../shaders/neptune/atmosphere/fragment.glsl"

export default class Neptune {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.camera = this.experience.camera

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("neptune")
    }

    // Resource
    this.neptuneTexture = this.resources.items.neptuneTexture
    this.neptuneTexture.colorSpace = THREE.SRGBColorSpace

    // neptune Parameters
    this.neptuneParameters = {
      atmosphereColor: "#2b378b",
      atmosphereTwilightColor: "#1f2255",
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.neptuneParameters, "atmosphereColor")
        .name("atmosphereColor")
        .onChange(() => {
          this.neptuneMaterial.uniforms.uAtmosphereColor.value.set(this.neptuneParameters.atmosphereColor)
        })

      this.debugFolder
        .addColor(this.neptuneParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.neptuneMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.neptuneParameters.atmosphereTwilightColor)
        })

      this.debugFolder.add({ updateCamera: () => this.updateCamera() }, "updateCamera").name("move to neptune")
    }

    // TEMP
    // Sun Coordinates to calculate sun rays direction
    this.neptuneSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
    this.sunDirection = new THREE.Vector3()
    this.distanceFromSun = _options.distanceFromSun

    this.setNeptune()
    this.setAtmosphere()
    this.updateNeptune()
  }

  setNeptune() {
    this.neptuneGeometry = new THREE.SphereGeometry(1, 32, 32)
    this.neptuneMaterial = new THREE.ShaderMaterial({
      vertexShader: neptuneVertexShader,
      fragmentShader: neptuneFragmentShader,
      uniforms: {
        uSurfaceTexture: new THREE.Uniform(this.neptuneTexture),
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.neptuneParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.neptuneParameters.atmosphereTwilightColor)),
      },
    })
    this.neptuneMaterial.toneMapped = false
    this.neptune = new THREE.Mesh(this.neptuneGeometry, this.neptuneMaterial)
    this.scene.add(this.neptune)
  }

  setAtmosphere() {
    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.neptuneParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.neptuneParameters.atmosphereTwilightColor)),
      },
      side: THREE.BackSide,
      transparent: true,
    })
    this.atmosphereMaterial.toneMapped = false
    this.neptuneAtmosphere = new THREE.Mesh(this.neptuneGeometry, this.atmosphereMaterial)
    this.neptuneAtmosphere.scale.set(1.04, 1.04, 1.04)
    this.neptuneAtmosphere.position.copy(this.neptune.position)
    this.scene.add(this.neptuneAtmosphere)
  }

  updateNeptune() {
    // Sun direction
    this.sunDirection.setFromSpherical(this.neptuneSpherical)

    // Debug
    this.neptune.position.copy(this.sunDirection).multiplyScalar(-this.distanceFromSun)
    this.neptuneAtmosphere.position.copy(this.neptune.position)

    // Uniforms
    this.neptuneMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
    this.atmosphereMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
  }

  updateCamera() {
    // move camera to neptune
    this.camera.instance.lookAt(this.neptune.position)
    this.camera.controls.target.copy(this.neptune.position)

    this.camera.instance.position.set(-23.457858238990617, 0.16476157963130125, -52.70329661479013)
  }

  update() {
    this.neptune.rotation.y = this.time.elapsed * 0.1
  }
}
