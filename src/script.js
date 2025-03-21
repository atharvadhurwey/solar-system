import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import GUI from "lil-gui"
import earthVertexShader from "./shaders/earth/vertex.glsl"
import earthFragmentShader from "./shaders/earth/fragment.glsl"
import atmosphereVertexShader from "./shaders/atmosphere/vertex.glsl"
import atmosphereFragmentShader from "./shaders/atmosphere/fragment.glsl"
import sunVertexShader from "./shaders/sun/vertex.glsl"
import sunFragmentShader from "./shaders/sun/fragment.glsl"

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
earthDayTexture.anisotropy = 8

const earthNightTexture = textureLoader.load("./earth/night.jpg")
earthNightTexture.colorSpace = THREE.SRGBColorSpace
earthNightTexture.anisotropy = 8

const earthSpecularCloudsTexture = textureLoader.load("./earth/specularClouds.jpg")
earthSpecularCloudsTexture.anisotropy = 8

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
// cube Texture (something to do with the sun)

// Coordinates
const earthSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
const sunDirection = new THREE.Vector3()

// Sun Mesh
const sunMaterial = new THREE.ShaderMaterial({
  vertexShader: sunVertexShader,
  fragmentShader: sunFragmentShader,
  uniforms: {
    uTime: { value: 0 },
  },
  transparent: true,
})
const sun = new THREE.Mesh(earth.geometry, sunMaterial)
scene.add(sun)

// Update
const updateSun = () => {
  // Sun direction
  sunDirection.setFromSpherical(earthSpherical)

  // Debug
  earth.position.copy(sunDirection).multiplyScalar(-50)
  atmosphere.position.copy(earth.position)

  // Uniforms
  earthMaterial.uniforms.uSunDirection.value.copy(sunDirection)
  atmosphereMaterial.uniforms.uSunDirection.value.copy(sunDirection)
}
updateSun()

// Tweaks
gui.add(earthSpherical, "phi").min(0).max(Math.PI).onChange(updateSun)
gui.add(earthSpherical, "theta").min(-Math.PI).max(Math.PI).onChange(updateSun)
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

// camera.lookAt(earth.position)
// controls.target.copy(earth.position)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  // Update uniforms
  sunMaterial.uniforms.uTime.value = elapsedTime

  earth.rotation.y = elapsedTime * 0.1

  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
