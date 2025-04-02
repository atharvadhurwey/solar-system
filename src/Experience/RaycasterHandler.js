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

  setupEventListeners() {
    this.canvas.addEventListener("click", (event) => this.onMouseClick(event))
  }

  onMouseClick(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    // Perform raycasting
    this.raycaster.setFromCamera(this.mouse, this.camera.instance)
    const intersects = this.raycaster.intersectObjects(this.planets)

    if (intersects.length > 0) {
      const selectedPlanet = intersects[0].object

      const planetName = selectedPlanet.name.replace("selectionDisc-", "")

      // using this so that we don't start following the same planet again
      if (this.selectedPlanet == planetName) {
        return
      }

      // Set camera to follow the clicked planet
      this.camera.setFollowTarget(this.planets.find((p) => p.name === planetName))

      this.selectedPlanet = this.camera.currentTarget.name
    }
  }
}
