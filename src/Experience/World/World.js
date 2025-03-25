import Experience from "../Experience.js"
import Earth from "./Earth.js"
import Mars from "./Mars.js"
import Mercury from "./Mercury.js"
import Sun from "./Sun.js"
import Venus from "./Venus.js"
import Jupiter from "./Jupiter.js"
import Saturn from "./Saturn.js"
import Uranus from "./Uranus.js"
import Neptune from "./Neptune.js"

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    // this.compileCamera = this.experience.compileCamera.instance
    this.camera = this.experience.camera.instance
    this.renderer = this.experience.renderer.instance

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
      this.uranus = new Uranus({ distanceFromSun: 49 })
      this.neptune = new Neptune({ distanceFromSun: 56 })

      // setTimeout(() => {
      //   this.renderer.compile(this.scene, this.compileCamera)
      // }, 1000)
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
    if (this.uranus) this.uranus.update()
    if (this.neptune) this.neptune.update()
  }
}
