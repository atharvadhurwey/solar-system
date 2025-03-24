import * as THREE from "three"
import Experience from "../Experience.js"

import jupiterVertexShader from "../../shaders/jupiter/surface/vertex.glsl"
import jupiterFragmentShader from "../../shaders/jupiter/surface/fragment.glsl"

import atmosphereVertexShader from "../../shaders/jupiter/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "../../shaders/jupiter/atmosphere/fragment.glsl"

export default class Jupiter {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.camera = this.experience.camera

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("jupiter")
    }

    // Resource
    this.jupiterTexture = this.resources.items.jupiterTexture
    this.jupiterTexture.colorSpace = THREE.SRGBColorSpace

    // jupiter Parameters
    this.jupiterParameters = {
      atmosphereColor: "#a59186",
      atmosphereTwilightColor: "#c99039",
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.jupiterParameters, "atmosphereColor")
        .name("atmosphereColor")
        .onChange(() => {
          this.jupiterMaterial.uniforms.uAtmosphereColor.value.set(this.jupiterParameters.atmosphereColor)
        })

      this.debugFolder
        .addColor(this.jupiterParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.jupiterMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.jupiterParameters.atmosphereTwilightColor)
        })

      this.debugFolder.add({ updateCamera: () => this.updateCamera() }, "updateCamera").name("move to jupiter")
    }

    // TEMP
    // Sun Coordinates to calculate sun rays direction
    this.jupiterSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
    this.sunDirection = new THREE.Vector3()
    this.distanceFromSun = _options.distanceFromSun

    this.setjupiter()
    this.setAtmosphere()
    this.updatejupiter()
  }

  setjupiter() {
    this.jupiterGeometry = new THREE.SphereGeometry(1, 32, 32)
    this.jupiterMaterial = new THREE.ShaderMaterial({
      vertexShader: jupiterVertexShader,
      fragmentShader: jupiterFragmentShader,
      uniforms: {
        uSurfaceTexture: new THREE.Uniform(this.jupiterTexture),
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.jupiterParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.jupiterParameters.atmosphereTwilightColor)),
      },
    })
    this.jupiter = new THREE.Mesh(this.jupiterGeometry, this.jupiterMaterial)
    this.scene.add(this.jupiter)
  }

  setAtmosphere() {
    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.jupiterParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.jupiterParameters.atmosphereTwilightColor)),
      },
      side: THREE.BackSide,
      transparent: true,
    })
    this.jupiterAtmosphere = new THREE.Mesh(this.jupiterGeometry, this.atmosphereMaterial)
    this.jupiterAtmosphere.scale.set(1.03, 1.03, 1.03)
    this.jupiterAtmosphere.position.copy(this.jupiter.position)
    this.scene.add(this.jupiterAtmosphere)
  }

  updatejupiter() {
    // Sun direction
    this.sunDirection.setFromSpherical(this.jupiterSpherical)

    // Debug
    this.jupiter.position.copy(this.sunDirection).multiplyScalar(-this.distanceFromSun)
    this.jupiterAtmosphere.position.copy(this.jupiter.position)

    // Uniforms
    this.jupiterMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
    this.atmosphereMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
  }

  updateCamera() {
    // move camera to jupiter
    this.camera.instance.lookAt(this.jupiter.position)
    this.camera.controls.target.copy(this.jupiter.position)

    this.camera.instance.position.set(-12.420248416964282, 0.0, -33.651959280876167)
  }

  update() {
    this.jupiter.rotation.y = this.time.elapsed * 0.1
  }
}
