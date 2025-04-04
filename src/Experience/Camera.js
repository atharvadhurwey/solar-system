import * as THREE from "three"
import Experience from "./Experience.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import EventEmitter from "./Utils/EventEmitter.js"

export default class Camera extends EventEmitter {
  constructor() {
    super()

    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas

    // Setup
    this.isMouseDown = false
    this.isCameraFollowing = false
    this.currentTarget = null
    this.mouse = new THREE.Vector2()
    this.previousMouse = new THREE.Vector2()
    this.spherical = new THREE.Spherical(5, Math.PI / 2, 0) // Default zoom level
    this.maxCameraDistance = 200000

    this.setInstance()
    this.setControls()
    this.setEventListeners()
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(25, this.sizes.width / this.sizes.height, 0.1, this.maxCameraDistance)
    this.instance.position.set(0, 2000, 0)
    this.scene.add(this.instance)
  }

  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas)
    this.controls.enableDamping = true
  }

  setEventListeners() {
    this.onMouseDown = (event) => {
      this.isMouseDown = true
      this.previousMouse.set(event.clientX, event.clientY)
    }

    this.onMouseUp = () => {
      this.isMouseDown = false
    }

    this.onMouseMove = (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      this.trigger("mouseMove")

      if (this.isMouseDown && this.isCameraFollowing) {
        const deltaX = (event.clientX - this.previousMouse.x) * 0.005
        const deltaY = (event.clientY - this.previousMouse.y) * 0.005

        this.spherical.theta -= deltaX
        this.spherical.phi -= deltaY

        // Restrict vertical movement (phi) based on followSettings
        if (this.followSettings) {
          this.spherical.phi = Math.max(this.followSettings.minPolarAngle, Math.min(this.followSettings.maxPolarAngle, this.spherical.phi))
        }

        this.previousMouse.set(event.clientX, event.clientY)
      }
    }

    this.onWheel = (event) => {
      if (this.isCameraFollowing) {
        const baseSpeed = 0.01 // Base zoom sensitivity
        const scaleFactor = 0.05 // Adjust this for more/less exponential effect

        // logarithmic zoom speed calculation
        const zoomSpeed = baseSpeed * Math.log1p(scaleFactor * this.spherical.radius) * 2

        // Apply zooming
        this.spherical.radius += event.deltaY * zoomSpeed
        // Use followSettings to clamp zoom
        if (this.followSettings) {
          // this.spherical.radius = Math.max(this.followSettings.minDistance, this.spherical.radius)
        }
      }
    }

    // Attach event listeners
    window.addEventListener("mousedown", this.onMouseDown)
    window.addEventListener("mouseup", this.onMouseUp)
    window.addEventListener("mousemove", this.onMouseMove)
    window.addEventListener("wheel", this.onWheel)
  }

  setFollowTarget(target, options = {}) {
    // specific case for the Sun
    // Disable camera follow and zoom for the Sun
    const minDistance = target.geometry.parameters.radius + target.geometry.parameters.radius * 2

    this.currentTarget = target
    this.trigger("targetChanged")

    if (target.name === "Sun") {
      console.log("Camera is now following the Sun")
      this.spherical.radius = minDistance * 2 // Set initial zoom level
      const offset = new THREE.Vector3().setFromSpherical(this.spherical)
      const desiredPosition = target.position.clone().add(offset)

      // Update camera position
      this.instance.position.copy(desiredPosition)
      this.isCameraFollowing = false
      this.controls.enableZoom = true
      this.controls.target.copy(target.position)
      this.controls.maxDistance = this.maxCameraDistance
      this.controls.update()
      return
    }

    this.isCameraFollowing = true
    this.controls.enableZoom = false

    // Default values with ability to override

    // Store initial spherical radius for consistent zooming
    this.initialSphericalRadius = this.spherical.radius

    this.followSettings = {
      minDistance: minDistance || 5, // Minimum zoom distance
      minPolarAngle: options.minPolarAngle || 0.1, // Prevent flipping
      maxPolarAngle: options.maxPolarAngle || Math.PI - 0.1,
    }

    // Apply limits to controls
    this.spherical.radius = this.followSettings.minDistance * 2 // Set initial zoom level
    this.controls.minDistance = this.followSettings.minDistance
    this.controls.minPolarAngle = this.followSettings.minPolarAngle
    this.controls.maxPolarAngle = this.followSettings.maxPolarAngle

    console.log(`Camera is now following ${target.name} with settings:`, this.followSettings)
  }

  updateFollowCamera() {
    if (this.isCameraFollowing && this.currentTarget) {
      const offset = new THREE.Vector3().setFromSpherical(this.spherical)
      const desiredPosition = this.currentTarget.position.clone().add(offset)

      // Update camera position
      this.instance.position.copy(desiredPosition)
      this.controls.target.copy(this.currentTarget.position)
      this.controls.update()
    }
  }

  disposeEvents() {
    window.removeEventListener("mousedown", this.onMouseDown)
    window.removeEventListener("mouseup", this.onMouseUp)
    window.removeEventListener("mousemove", this.onMouseMove)
    window.removeEventListener("wheel", this.onWheel)
    console.log("Camera event listeners removed")
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }

  update() {
    this.controls.update()
    this.updateFollowCamera()
  }
}
