import * as THREE from "three"
import Experience from "../Experience.js"

import saturnVertexShader from "../../shaders/saturn/surface/vertex.glsl"
import saturnFragmentShader from "../../shaders/saturn/surface/fragment.glsl"

import atmosphereVertexShader from "../../shaders/saturn/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "../../shaders/saturn/atmosphere/fragment.glsl"

import saturnRingVertexShader from "../../shaders/saturn/ring/vertex.glsl"
import saturnRingFragmentShader from "../../shaders/saturn/ring/fragment.glsl"

export default class Saturn {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.camera = this.experience.camera

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("saturn")
    }

    // Resource
    this.saturnSurfaceTexture = this.resources.items.saturnSurfaceTexture
    this.saturnSurfaceTexture.colorSpace = THREE.SRGBColorSpace

    this.saturnRingsTexture = this.resources.items.saturnRingTexture

    // saturn Parameters
    this.saturnParameters = {
      atmosphereColor: "#a59186",
      atmosphereTwilightColor: "#c99039",
    }

    // debug
    if (this.debug.active) {
      this.debugFolder
        .addColor(this.saturnParameters, "atmosphereColor")
        .name("atmosphereColor")
        .onChange(() => {
          this.saturnMaterial.uniforms.uAtmosphereColor.value.set(this.saturnParameters.atmosphereColor)
        })

      this.debugFolder
        .addColor(this.saturnParameters, "atmosphereTwilightColor")
        .name("atmosphereTwilightColor")
        .onChange(() => {
          this.saturnMaterial.uniforms.uAtmosphereTwilightColor.value.set(this.saturnParameters.atmosphereTwilightColor)
        })

      this.debugFolder.add({ updateCamera: () => this.updateCamera() }, "updateCamera").name("move to saturn")
    }

    // TEMP
    // Sun Coordinates to calculate sun rays direction
    this.saturnSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
    this.sunDirection = new THREE.Vector3()
    this.distanceFromSun = _options.distanceFromSun

    this.setsaturn()
    this.setRings()
    this.setAtmosphere()
    this.updatesaturn()
  }

  setRings() {
    this.innerRadius = 2
    this.outerRadius = 4
    this.geo = new THREE.RingGeometry(this.innerRadius, this.outerRadius, 32)
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        ringTexture: { value: this.saturnRingsTexture },
        innerRadius: { value: this.innerRadius },
        outerRadius: { value: this.outerRadius },
      },
      vertexShader: saturnRingVertexShader,
      fragmentShader: saturnRingFragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
    })
    this.rings = new THREE.Mesh(this.geo, this.mat)
    this.rings.rotation.x = Math.PI * 0.45
    this.scene.add(this.rings)
  }

  setsaturn() {
    this.saturnGeometry = new THREE.SphereGeometry(1, 32, 32)
    this.saturnMaterial = new THREE.ShaderMaterial({
      vertexShader: saturnVertexShader,
      fragmentShader: saturnFragmentShader,
      uniforms: {
        uSurfaceTexture: new THREE.Uniform(this.saturnSurfaceTexture),
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.saturnParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.saturnParameters.atmosphereTwilightColor)),
      },
    })
    this.saturn = new THREE.Mesh(this.saturnGeometry, this.saturnMaterial)
    this.scene.add(this.saturn)
  }

  setAtmosphere() {
    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereColor: new THREE.Uniform(new THREE.Color(this.saturnParameters.atmosphereColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.saturnParameters.atmosphereTwilightColor)),
      },
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    })
    this.saturnAtmosphere = new THREE.Mesh(this.saturnGeometry, this.atmosphereMaterial)
    this.saturnAtmosphere.scale.set(1.03, 1.03, 1.03)
    this.saturnAtmosphere.position.copy(this.saturn.position)
    this.scene.add(this.saturnAtmosphere)
  }

  updatesaturn() {
    // Sun direction
    this.sunDirection.setFromSpherical(this.saturnSpherical)

    // Debug
    this.saturn.position.copy(this.sunDirection).multiplyScalar(-this.distanceFromSun)
    this.rings.position.copy(this.saturn.position)
    this.saturnAtmosphere.position.copy(this.saturn.position)

    // Uniforms
    this.saturnMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
    this.atmosphereMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)
  }

  updateCamera() {
    // move camera to saturn
    this.camera.instance.lookAt(this.saturn.position)
    this.camera.controls.target.copy(this.saturn.position)

    this.camera.instance.position.set(-19.276925469666406, 0.6298954560075182, -45.172164152584955)
  }

  update() {
    this.saturn.rotation.y = this.time.elapsed * 0.1
  }
}
