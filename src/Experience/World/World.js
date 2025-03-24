import Experience from "../Experience.js"
import Earth from "./Earth.js"
import Mars from "./Mars.js"
import Mercury from "./Mercury.js"
import Sun from "./Sun.js"

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      // this.sun = new Sun()
      this.mercury = new Mercury()
      this.earth = new Earth()
      this.mars = new Mars()
    })
  }

  update() {
    if (this.sun) this.sun.update()
    if (this.mercury) this.mercury.update()
    if (this.earth) this.earth.update()
    if (this.mars) this.mars.update()
  }
}
