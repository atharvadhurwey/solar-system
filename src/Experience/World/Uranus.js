import * as THREE from "three"
import Experience from "../Experience.js"

import uranusVertexShader from "../../shaders/uranus/surface/vertex.glsl"
import uranusFragmentShader from "../../shaders/uranus/surface/fragment.glsl"

import uranusRingVertexShader from "../../shaders/uranus/ring/vertex.glsl"
import uranusRingFragmentShader from "../../shaders/uranus/ring/fragment.glsl"

import atmosphereVertexShader from "../../shaders/uranus/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "../../shaders/uranus/atmosphere/fragment.glsl"

export default class Uranus {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.camera = this.experience.camera

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("uranus")
    }

    // Resource
    this.uranusTexture = this.resources.items.uranusTexture
    this.uranusTexture.colorSpace = THREE.SRGBColorSpace
    this.uranusRingTexture = this.resources.items.uranusRingTexture
    this.uranusRingTexture.colorSpace = THREE.SRGBColorSpace

    // uranus Parameters
    this.uranusParameters = {
      atmosphereColor: "#5eade7",
      atmosphereTwilightColor: "#3688ce",
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.uranusParameters, "atmosphereColor")
        .name("atmosphereColor")
        .onChange(() => {
          this.uranusMaterial.uniforms.uAtmosphereColor.value.set(this.uranusParameters.atmosphereColor)
        })

      this.debugFolder
        .addColor(this.uranusParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.uranusMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.uranusParameters.atmosphereTwilightColor)
        })

      this.debugFolder.add({ updateCamera: () => this.updateCamera() }, "updateCamera").name("move to uranus")
    }

    // TEMP
    // Sun Coordinates to calculate sun rays direction
    this.uranusSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
    this.sunDirection = new THREE.Vector3()
    this.distanceFromSun = _options.distanceFromSun

    this.setUranus()
    this.setAtmosphere()
    this.setRings()
    this.updateUranus()
  }

  setRings() {
    this.innerRadius = 2
    this.outerRadius = 3
    this.geo = new THREE.RingGeometry(this.innerRadius, this.outerRadius, 32)
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        ringTexture: { value: this.uranusRingTexture },
        innerRadius: { value: this.innerRadius },
        outerRadius: { value: this.outerRadius },
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
      },
      vertexShader: uranusRingVertexShader,
      fragmentShader: uranusRingFragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
    this.rings = new THREE.Mesh(this.geo, this.mat)
    this.rings.rotation.x = Math.PI * 0.45
    this.scene.add(this.rings)
  }

  setUranus() {
    this.uranusGeometry = new THREE.SphereGeometry(1, 32, 32)
    this.uranusMaterial = new THREE.ShaderMaterial({
      vertexShader: uranusVertexShader,
      fragmentShader: uranusFragmentShader,
      uniforms: {
        uSurfaceTexture: new THREE.Uniform(this.uranusTexture),
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.uranusParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.uranusParameters.atmosphereTwilightColor)),
      },
    })
    this.uranus = new THREE.Mesh(this.uranusGeometry, this.uranusMaterial)
    this.scene.add(this.uranus)
  }

  setAtmosphere() {
    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.uranusParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.uranusParameters.atmosphereTwilightColor)),
      },
      side: THREE.BackSide,
      transparent: true,
    })
    this.atmosphereMaterial.toneMapped = false
    this.uranusAtmosphere = new THREE.Mesh(this.uranusGeometry, this.atmosphereMaterial)
    this.uranusAtmosphere.scale.set(1.04, 1.04, 1.04)
    this.uranusAtmosphere.position.copy(this.uranus.position)
    this.scene.add(this.uranusAtmosphere)
  }

  updateUranus() {
    // Sun direction
    this.sunDirection.setFromSpherical(this.uranusSpherical)

    // Debug
    this.uranus.position.copy(this.sunDirection).multiplyScalar(-this.distanceFromSun)
    this.rings.position.copy(this.uranus.position)
    this.uranusAtmosphere.position.copy(this.uranus.position)

    // Uniforms
    this.uranusMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
    this.atmosphereMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
  }

  updateCamera() {
    // move camera to uranus
    this.camera.instance.lookAt(this.uranus.position)
    this.camera.controls.target.copy(this.uranus.position)

    this.camera.instance.position.set(-18.829658726441274, -0.04239810505201707, -44.96938690991533)
  }

  update() {
    this.uranus.rotation.y = this.time.elapsed * 0.1
  }
}
