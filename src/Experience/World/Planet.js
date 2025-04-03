import * as THREE from "three"
import Experience from "../Experience.js"

export default class Planet {
  constructor() {
    this.experience = new Experience()
    this.camera = this.experience.camera
    this.scene = this.experience.scene

    // Common
    this.maxScale = 200 // Maximum scale factor for the selection ring
  }

  createSelectionDisc(planet, color = 0x888888) {
    const geometry = new THREE.CircleGeometry(1, 32) // Circular clickable area
    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.4, // Adjust visibility (0 = fully transparent, 1 = visible)
      depthWrite: false, // Prevents it from blocking the view
    })

    const selectionDisc = new THREE.Mesh(geometry, material)
    selectionDisc.name = `selectionDisc-${planet.name}` // Unique name for identification
    selectionDisc.userData.planetName = planet.name
    selectionDisc.position.copy(planet.position)
    selectionDisc.lookAt(this.camera.instance.position) // Always face the camera

    // Store reference for updating size
    planet.selectionDisc = selectionDisc

    this.scene.add(selectionDisc)
    return selectionDisc
  }

  updatePlanetDisc(planetDisc, distance) {
    const scaleFactor = Math.min(distance * 0.01, this.maxScale) // Adjust sensitivity

    planetDisc.scale.set(scaleFactor, scaleFactor, scaleFactor)
  }
}
