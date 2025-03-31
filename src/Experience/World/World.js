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
    this.resources = this.experience.resources

    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      const timeScale = 100000
      const distanceScale = 1
      const planetSizes = {
        earthSize: 1, // Earth is the reference (1 unit)
        mercurySize: 0.38,
        venusSize: 0.95,
        marsSize: 0.53,
        jupiterSize: 10.97,
        saturnSize: 9.14,
        uranusSize: 3.98,
        neptuneSize: 3.87,
        sunSize: 109.3,
      }

      // Setup
      this.sun = new Sun()
      this.mercury = new Mercury({ distanceScale, scale: 1, timeScale, planetSize: planetSizes.mercurySize })
      this.venus = new Venus({ distanceScale, scale: 1, timeScale, planetSize: planetSizes.venusSize })
      this.earth = new Earth({ distanceScale, scale: 1, timeScale, planetSize: planetSizes.earthSize })
      this.mars = new Mars({ distanceScale, scale: 1, timeScale, planetSize: planetSizes.marsSize })
      this.jupiter = new Jupiter({ distanceScale, scale: 1, timeScale, planetSize: planetSizes.jupiterSize })
      this.saturn = new Saturn({ distanceScale, scale: 1, timeScale, planetSize: planetSizes.saturnSize })
      this.uranus = new Uranus({ distanceScale, scale: 1, timeScale, planetSize: planetSizes.uranusSize })
      this.neptune = new Neptune({ distanceScale, scale: 1, timeScale, planetSize: planetSizes.neptuneSize })
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
