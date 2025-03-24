import * as THREE from "three"
import Experience from "../Experience.js"

import mercuryVertexShader from "../../shaders/mercury/surface/vertex.glsl"
import mercuryFragmentShader from "../../shaders/mercury/surface/fragment.glsl"

// import atmosphereVertexShader from "../../shaders/mercury/atmosphere/vertex.glsl"
// import atmosphereFragmentShader from "../../shaders/mercury/atmosphere/fragment.glsl"

export default class Mercury {
  constructor() {
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
    this.mercuryTexture.colorSpace = THREE.SRGBColorSpace

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
    }

    // TEMP
    // Sun Coordinates to calculate sun rays direction
    this.mercurySpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
    this.sunDirection = new THREE.Vector3()

    this.setmercury()
    // this.setAtmosphere()
    this.updatemercury()
  }

  setmercury() {
    this.mercuryGeometry = new THREE.SphereGeometry(1, 32, 32)
    this.mercuryMaterial = new THREE.ShaderMaterial({
      vertexShader: mercuryVertexShader,
      fragmentShader: mercuryFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSurfaceTexture: new THREE.Uniform(this.mercuryTexture),
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.mercuryParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.mercuryParameters.atmosphereTwilightColor)),
      },
    })
    this.mercury = new THREE.Mesh(this.mercuryGeometry, this.mercuryMaterial)
    this.scene.add(this.mercury)
  }

  setAtmosphere() {
    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.mercuryParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.mercuryParameters.atmosphereTwilightColor)),
      },
      side: THREE.BackSide,
      transparent: true,
    })
    this.mercuryAtmosphere = new THREE.Mesh(this.mercuryGeometry, this.atmosphereMaterial)
    this.mercuryAtmosphere.scale.set(1.04, 1.04, 1.04)
    this.mercuryAtmosphere.position.copy(this.mercury.position)
    this.scene.add(this.mercuryAtmosphere)
  }

  updatemercury() {
    // Sun direction
    this.sunDirection.setFromSpherical(this.mercurySpherical)

    this.mercury.position.copy(this.sunDirection)
    this.mercury.position.copy(this.sunDirection).multiplyScalar(-10)

    // Uniforms
    this.mercuryMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)

    // move camera to mercury
    // this.camera.instance.lookAt(this.mercury.position)
    // this.camera.controls.target.copy(this.mercury.position)
    // this.camera.instance.position.set(-1.3019516756442808, 0.32353354497371, -5.289484556401279)
  }

  update() {
    this.mercury.rotation.y = this.time.elapsed * 0.1
    this.mercuryMaterial.uniforms.uTime.value = this.time.elapsed
  }
}
