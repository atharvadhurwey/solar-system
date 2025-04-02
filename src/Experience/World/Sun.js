import * as THREE from "three"
import Experience from "../Experience.js"

import perlinVertex from "../../shaders/perlin/vertex.glsl"
import perlinFragment from "../../shaders/perlin/fragment.glsl"

import sunVertex from "../../shaders/sun/surface/vertex.glsl"
import sunFragment from "../../shaders/sun/surface/fragment.glsl"

import sunAtmosphereVertex from "../../shaders/sun/atmosphere/vertex.glsl"
import sunAtmosphereFragment from "../../shaders/sun/atmosphere/fragment.glsl"

import sunRaysVertex from "../../shaders/sun/rays/vertex.glsl"
import sunRaysFragment from "../../shaders/sun/rays/fragment.glsl"

export default class Sun {
  constructor(_options) {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.time = this.experience.time
    this.camera = this.experience.camera
    this.debug = this.experience.debug

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("Sun")
    }

    // debug
    if (this.debug.active) {
      this.debugFolder.add({ updateCamera: () => this.camera.setFollowTarget(this.sun, { sunSize: this.sunSize }) }, "updateCamera").name("move to sun")
    }

    // Options
    this.sunSize = _options.planetSize

    // Common
    this.basicSphereGeometry = new THREE.SphereGeometry(this.sunSize, 32, 32)

    // Setting CubeTexture
    this.cubeScene = new THREE.Scene()
    this.setCubeCamera()
    this.setCubeMesh()

    // Setting Sun
    this.setSun()
    this.setSunAtmosphere()
    // this.setSunRays()
    this.experience.raycaster.addPlanet(this.sun)
  }

  setCubeCamera() {
    this.cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
      format: THREE.RGBFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
      encoding: THREE.sRGBEncoding,
    })

    this.cubeCamera = new THREE.CubeCamera(0.1, 200, this.cubeRenderTarget)
  }

  setCubeMesh() {
    this.cubeMaterial = new THREE.ShaderMaterial({
      vertexShader: perlinVertex,
      fragmentShader: perlinFragment,
      uniforms: {
        uTime: { value: 0 },
      },
      // wireframe: true,
      side: THREE.DoubleSide,
    })

    this.cubePerlin = new THREE.Mesh(this.basicSphereGeometry, this.cubeMaterial)
    this.cubeScene.add(this.cubePerlin)
  }

  setSun() {
    this.sunMaterial = new THREE.ShaderMaterial({
      vertexShader: sunVertex,
      fragmentShader: sunFragment,
      uniforms: {
        uTime: { value: 0 },
        uCubePerlin: { value: null },
      },
      // wireframe: true,
      side: THREE.DoubleSide,
    })

    this.sun = new THREE.Mesh(this.basicSphereGeometry, this.sunMaterial)
    this.sun.name = "Sun"
    this.scene.add(this.sun)
  }

  setSunAtmosphere() {
    this.sunAtmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: sunAtmosphereVertex,
      fragmentShader: sunAtmosphereFragment,
      uniforms: {
        uTime: { value: 0 },
      },
      // wireframe: true,
      side: THREE.BackSide,
      depthWrite: false,
      transparent: true,
    })

    this.sunAtmosphere = new THREE.Mesh(this.basicSphereGeometry, this.sunAtmosphereMaterial)
    this.sunAtmosphere.scale.set(1.19, 1.19, 1.19)
    this.scene.add(this.sunAtmosphere)
  }

  setSunRays() {
    this.sunRaysMaterial = new THREE.ShaderMaterial({
      vertexShader: sunRaysVertex,
      fragmentShader: sunRaysFragment,
      uniforms: {
        uTime: { value: 0 },
        uHueSpread: { value: 0.2 },
        uHue: { value: 0.2 },
        uLength: { value: 0.2 },
        uWidth: { value: 0.03 },
        uNoiseFrequency: { value: 8.0 },
        uNoiseAmplitude: { value: 0.2 },
        uOpacity: { value: 0.03 },
        uAlphaBlended: { value: 0.4 },
      },
      // wireframe: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    function createRibbons(lineCount, lineLength) {
      // Buffers
      const positions = new Float32Array(lineCount * lineLength * 2 * 3) // aPos
      const initialPositions = new Float32Array(lineCount * lineLength * 2 * 3) // aPos0
      const wireRandom = new Float32Array(lineCount * lineLength * 2 * 4) // aWireRandom
      const indices = new Uint16Array(lineCount * (lineLength - 1) * 2 * 3) // Indices

      let posIndex = 0,
        initPosIndex = 0,
        randomIndex = 0,
        indexCount = 0

      const c = new THREE.Vector3()
      const h = new THREE.Vector3()
      const tempVec = new THREE.Vector3()

      for (let v = 0; v < lineCount; v++) {
        if (Math.random() < 0.1 || v === 0) {
          h.randomDirection().normalize()
        }

        c.copy(h)
        tempVec.randomDirection().multiplyScalar(0.025)
        c.add(tempVec).normalize()

        const g = [Math.random(), Math.random(), Math.random(), Math.random()] // Random values for color/animation

        for (let m = 0; m < lineLength; m++) {
          for (let y = 0; y <= 1; y++) {
            // aPos (Position in space)
            positions[posIndex++] = (m + 0.5) / lineLength
            positions[posIndex++] = (v + 0.5) / lineCount
            positions[posIndex++] = 2 * y - 1

            // aWireRandom (Random values for color variation)
            for (let T = 0; T < 4; T++) {
              wireRandom[randomIndex++] = g[T]
            }

            // aPos0 (Initial positions)
            initialPositions[initPosIndex++] = c.x
            initialPositions[initPosIndex++] = c.y
            initialPositions[initPosIndex++] = c.z
          }

          // Triangle indices
          if (m < lineLength - 1) {
            const _ = 2 * (v * lineLength + m)
            indices[indexCount++] = _ + 0
            indices[indexCount++] = _ + 1
            indices[indexCount++] = _ + 2
            indices[indexCount++] = _ + 2
            indices[indexCount++] = _ + 1
            indices[indexCount++] = _ + 3
          }
        }
      }

      // Create geometry
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("aPos", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("aPos0", new THREE.BufferAttribute(initialPositions, 3))
      geometry.setAttribute("aWireRandom", new THREE.BufferAttribute(wireRandom, 4))
      geometry.setIndex(new THREE.BufferAttribute(indices, 1))

      // Optimize bounding sphere
      geometry.computeBoundingSphere()
      geometry.boundingSphere.radius = 1

      return geometry
    }

    const lineCount = 4095
    const lineLength = 8

    // Create the ribbons geometry
    this.sunRaysGeometry = createRibbons(lineCount, lineLength)

    this.sunRays = new THREE.Mesh(this.sunRaysGeometry, this.sunRaysMaterial)
    this.scene.add(this.sunRays)
  }

  update() {
    // Updating cube camera & texture
    this.cubeCamera.update(this.experience.renderer.instance, this.cubeScene)
    this.sunMaterial.uniforms.uCubePerlin.value = this.cubeRenderTarget.texture

    // updating uniforms
    this.cubeMaterial.uniforms.uTime.value = this.time.elapsed
    this.sunMaterial.uniforms.uTime.value = this.time.elapsed
    this.sunAtmosphereMaterial.uniforms.uTime.value = this.time.elapsed
    // this.sunRaysMaterial.uniforms.uTime.value = this.time.elapsed
  }
}
