import Experience from "../Experience.js"
import Earth from "./Earth.js"
import Mars from "./Mars.js"
import Mercury from "./Mercury.js"
import Sun from "./Sun.js"
import Venus from "./Venus.js"
import Jupiter from "./Jupiter.js"
import Saturn from "./Saturn.js"

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      this.sun = new Sun()
      this.mercury = new Mercury({ distanceFromSun: 7 })
      this.venus = new Venus({ distanceFromSun: 14 })
      this.earth = new Earth({ distanceFromSun: 21 })
      this.mars = new Mars({ distanceFromSun: 28 })
      this.jupiter = new Jupiter({ distanceFromSun: 35 })
      this.saturn = new Saturn({ distanceFromSun: 42 })
    })
  }

  update() {
    if (this.sun) this.sun.update()
    if (this.mercury) this.mercury.update()
    if (this.venus) this.venus.update()
    if (this.earth) this.earth.update()
    if (this.mars) this.mars.update()
    if (this.jupiter) this.jupiter.update()
    if (this.saturn) this.saturn.update()
  }
}
