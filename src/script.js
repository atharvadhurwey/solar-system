import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import GUI from "lil-gui"

import earthVertexShader from "./shaders/earth/vertex.glsl"
import earthFragmentShader from "./shaders/earth/fragment.glsl"
import atmosphereVertexShader from "./shaders/earthAtmosphere/vertex.glsl"
import atmosphereFragmentShader from "./shaders/earthAtmosphere/fragment.glsl"

import perlinFragment from "./shaders/perlin/fragment.glsl"
import perlinVertex from "./shaders/perlin/vertex.glsl"
import sunFragment from "./shaders/sun/fragment.glsl"
import sunVertex from "./shaders/sun/vertex.glsl"
import sunAtmosphereFragment from "./shaders/sunAtmosphere/fragment.glsl"
import sunAtmosphereVertex from "./shaders/sunAtmosphere/vertex.glsl"
import sunRaysFragment from "./shaders/sunRays/fragment.glsl"
import sunRaysVertex from "./shaders/sunRays/vertex.glsl"

/**
 * Base
 */
// Debug
const gui = new GUI()
gui.hide()

// Canvas
const canvas = document.querySelector("canvas.webgl")

// Scene
const scene = new THREE.Scene()

// Loaders
const textureLoader = new THREE.TextureLoader()

/**
 * Earth
 */
const earthParameters = {}
earthParameters.atmosphereDayColor = "#00aaff"
earthParameters.atmosphereTwilightColor = "#ff6600"
earthParameters.clouds = 0.8

gui.addColor(earthParameters, "atmosphereDayColor").onChange(() => {
  earthMaterial.uniforms.uAtmosphereDayColor.value.set(earthParameters.atmosphereDayColor)
  atmosphereMaterial.uniforms.uAtmosphereDayColor.value.set(earthParameters.atmosphereDayColor)
})
gui.addColor(earthParameters, "atmosphereTwilightColor").onChange(() => {
  earthMaterial.uniforms.uAtmosphereTwilightColor.value.set(earthParameters.atmosphereTwilightColor)
  atmosphereMaterial.uniforms.uAtmosphereTwilightColor.value.set(earthParameters.atmosphereTwilightColor)
})

// Textures
const earthDayTexture = textureLoader.load("./earth/day.jpg")
earthDayTexture.colorSpace = THREE.SRGBColorSpace
// earthDayTexture.anisotropy = 8

const earthNightTexture = textureLoader.load("./earth/night.jpg")
earthNightTexture.colorSpace = THREE.SRGBColorSpace
// earthNightTexture.anisotropy = 8

const earthSpecularCloudsTexture = textureLoader.load("./earth/specularClouds.jpg")
// earthSpecularCloudsTexture.anisotropy = 8

// Mesh
// const earthGeometry = new THREE.SphereGeometry(1, 64, 64)
const earthGeometry = new THREE.SphereGeometry(1, 32, 32)
const earthMaterial = new THREE.ShaderMaterial({
  vertexShader: earthVertexShader,
  fragmentShader: earthFragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uDayTexture: new THREE.Uniform(earthDayTexture),
    uNightTexture: new THREE.Uniform(earthNightTexture),
    uSpecularCloudsTexture: new THREE.Uniform(earthSpecularCloudsTexture),
    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
    uClouds: new THREE.Uniform(earthParameters.clouds),
    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(earthParameters.atmosphereDayColor)),
    uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(earthParameters.atmosphereTwilightColor)),
  },
})
const earth = new THREE.Mesh(earthGeometry, earthMaterial)
scene.add(earth)

// Atmosphere
const atmosphereMaterial = new THREE.ShaderMaterial({
  vertexShader: atmosphereVertexShader,
  fragmentShader: atmosphereFragmentShader,
  uniforms: {
    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(earthParameters.atmosphereDayColor)),
    uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(earthParameters.atmosphereTwilightColor)),
  },
  side: THREE.BackSide,
  transparent: true,
})
const atmosphere = new THREE.Mesh(earthGeometry, atmosphereMaterial)
atmosphere.scale.set(1.04, 1.04, 1.04)
// atmosphere.scale.set(1.015, 1.015, 1.015)
atmosphere.position.copy(earth.position)
scene.add(atmosphere)

/**
 * Sun
 */
const sunGroup = new THREE.Group()
scene.add(sunGroup)
const basicSphereGeometry = new THREE.SphereGeometry(1, 32, 32)

// cubeTexture
const cubeScene = new THREE.Scene()
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
  format: THREE.RGBFormat,
  generateMipmaps: true,
  minFilter: THREE.LinearMipmapLinearFilter,
  encoding: THREE.sRGBEncoding,
})
const cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget)

const perlinMaterial = new THREE.ShaderMaterial({
  vertexShader: perlinVertex,
  fragmentShader: perlinFragment,
  uniforms: {
    uTime: { value: 0 },
  },
  // wireframe: true,
  side: THREE.DoubleSide,
})

const cubePerlin = new THREE.Mesh(basicSphereGeometry, perlinMaterial)
cubeScene.add(cubePerlin)

// sun
const sunMaterial = new THREE.ShaderMaterial({
  vertexShader: sunVertex,
  fragmentShader: sunFragment,
  uniforms: {
    uTime: { value: 0 },
    uCubePerlin: { value: null },
  },
  // wireframe: true,
  side: THREE.DoubleSide,
})

const sun = new THREE.Mesh(basicSphereGeometry, sunMaterial)
scene.add(sun)
sunGroup.add(sun)

// sunAtmosphere
const sunAtmosphereMaterial = new THREE.ShaderMaterial({
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

const sunAtmosphere = new THREE.Mesh(basicSphereGeometry, sunAtmosphereMaterial)
sunAtmosphere.scale.set(1.15, 1.15, 1.15)
scene.add(sunAtmosphere)
sunGroup.add(sunAtmosphere)

// sunRays
const sunRaysMaterial = new THREE.ShaderMaterial({
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
    uAlphaBlended: { value: 0.8 },
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
const sunRaysGeometry = createRibbons(lineCount, lineLength)

const sunRays = new THREE.Mesh(sunRaysGeometry, sunRaysMaterial)
scene.add(sunRays)
sunGroup.add(sunRays)

sunGroup.scale.set(2, 2, 2)

// Sun Coordinates to calculate sun rays direction
const earthSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
const sunDirection = new THREE.Vector3()

// Update
const updateEarth = () => {
  // Sun direction
  sunDirection.setFromSpherical(earthSpherical)

  // Debug
  earth.position.copy(sunDirection).multiplyScalar(-50)
  atmosphere.position.copy(earth.position)

  // Uniforms
  earthMaterial.uniforms.uSunDirection.value.copy(sunDirection)
  atmosphereMaterial.uniforms.uSunDirection.value.copy(sunDirection)
}
updateEarth()

// Tweaks
gui.add(earthSpherical, "phi").min(0).max(Math.PI).onChange(updateEarth)
gui.add(earthSpherical, "theta").min(-Math.PI).max(Math.PI).onChange(updateEarth)
gui.add(earthMaterial.uniforms.uClouds, "value").min(0).max(1).step(0.1).name("Clouds")

/**
 * Stars
 */

const stars = []
const minDistance = 100
const maxSpread = 250
const starCount = 1000

for (var i = 0; i < starCount; i++) {
  let x = THREE.MathUtils.randFloatSpread(maxSpread)
  let y = THREE.MathUtils.randFloatSpread(maxSpread)
  let z = THREE.MathUtils.randFloatSpread(maxSpread)

  let distance = Math.sqrt(x * x + y * y + z * z)

  if (distance < minDistance) {
    const scale = minDistance / distance
    x *= scale
    y *= scale
    z *= scale
  }

  stars.push(x, y, z)
}
const starsGeometry = new THREE.BufferGeometry()
starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(stars, 3))
const starsMaterial = new THREE.PointsMaterial({ color: 0x888888 })
const starField = new THREE.Points(starsGeometry, starsMaterial)
scene.add(starField)

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
}

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(sizes.pixelRatio)
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height, 0.1, 800)
camera.position.x = 12 - 6
camera.position.y = 5 - 6
camera.position.z = 4 - 6
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(sizes.pixelRatio)
renderer.setClearColor("#000011")

camera.lookAt(earth.position)
controls.target.copy(earth.position)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  cubeCamera.update(renderer, cubeScene)
  sunMaterial.uniforms.uCubePerlin.value = cubeRenderTarget.texture

  // Update material
  sunMaterial.uniforms.uTime.value = elapsedTime
  perlinMaterial.uniforms.uTime.value = elapsedTime
  earth.rotation.y = elapsedTime * 0.1

  // Update cube reflection texture only if needed
  cubeCamera.update(renderer, cubeScene)
  sunMaterial.uniforms.uCubePerlin.value = cubeRenderTarget.texture

  // Update time uniforms only when required
  if (sunRaysMaterial.uniforms.uTime.value !== elapsedTime) {
    sunMaterial.uniforms.uTime.value = elapsedTime
    perlinMaterial.uniforms.uTime.value = elapsedTime
    sunAtmosphereMaterial.uniforms.uTime.value = elapsedTime
    sunRaysMaterial.uniforms.uTime.value = elapsedTime
  }

  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
