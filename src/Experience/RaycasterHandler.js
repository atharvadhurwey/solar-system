import * as THREE from "three"
import Experience from "./Experience.js"

export default class RaycasterHandler {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.canvas = this.experience.canvas
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()

    // Common
    this.planets = [] // Initialize planets array
    this.selectedPlanet = null

    this.lastClickTime = 0 // Stores the timestamp of the last click
    this.doubleClickThreshold = 300 // Time threshold in milliseconds

    this.planetTooltip = document.getElementById("planet-tooltip")

    this.setupEventListeners()
  }

  // Call this method to register planets for selection
  addPlanet(planetMesh) {
    this.planets.push(planetMesh)
  }

  // call this method to update selected planet
  updateTarget() {
    this.selectedPlanet = this.camera.currentTarget.name
  }

  updateMouse() {
    this.mouse.x = this.camera.mouse.x
    this.mouse.y = this.camera.mouse.y

    // Perform raycasting for hover effect
    this.onHoverPlanet()
  }

  setupEventListeners() {
    this.canvas.addEventListener("click", (event) => this.onMouseClick(event))
  }

  onMouseClick(event) {
    // Perform raycasting
    this.raycaster.setFromCamera(this.mouse, this.camera.instance)
    const intersects = this.raycaster.intersectObjects(this.planets)

    if (intersects.length > 0) {
      const selectedPlanet = intersects[0].object

      const planetName = selectedPlanet.name.replace("selectionDisc-", "")

      // using this so that we don't start following the same planet again
      if (this.selectedPlanet == planetName) return

      // Check if clicked object is the Sun for double click functionality
      if (planetName === "Sun") {
        const currentTime = Date.now()
        if (currentTime - this.lastClickTime < this.doubleClickThreshold) {
          this.camera.setFollowTarget(this.planets.find((p) => p.name === planetName)) // Follow the Sun
        }
        this.lastClickTime = currentTime
        return
      }
      // Set camera to follow the clicked planet
      this.camera.setFollowTarget(this.planets.find((p) => p.name === planetName))
    }
  }

  onHoverPlanet() {
    this.raycaster.setFromCamera(this.mouse, this.camera.instance)
    const intersects = this.raycaster.intersectObjects(this.planets, true)

    if (intersects.length > 0) {
      const hoveredPlanet = intersects[0].object
      const planetName = hoveredPlanet.name.replace("selectionDisc-", "")

      console.log(planetName)

      // Show tooltip
      this.planetTooltip.style.display = "block"
      this.planetTooltip.innerText = planetName
      this.planetTooltip.style.left = event.clientX + 10 + "px"
      this.planetTooltip.style.top = event.clientY + 10 + "px"
    } else {
      this.planetTooltip.style.display = "none"
    }
  }
}
