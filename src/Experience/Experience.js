import * as THREE from "three"

import Debug from "./Utils/Debug.js"
import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import Camera from "./Camera.js"
import Renderer from "./Renderer.js"
import World from "./World/World.js"
import Resources from "./Utils/Resources.js"

import sources from "./sources.js"
import CompileCamera from "./CompileCamera.js"

let instance = null

export default class Experience {
  constructor(_canvas) {
    // Singleton
    if (instance) {
      return instance
    }
    instance = this

    // Global access
    window.experience = this

    // Options
    this.canvas = _canvas

    // Setup
    this.debug = new Debug()
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.resources = new Resources(sources)
    this.camera = new Camera()
    this.compileCamera = new CompileCamera()
    this.renderer = new Renderer()
    this.world = new World()

    // Resize event
    this.sizes.on("resize", () => {
      this.resize()
    })

    // Time tick event
    this.time.on("tick", () => {
      this.update()
    })

    // force rendering all objects multiple times to compile textures
    this.isCompiled = false
    this.waitForCompile()
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()
  }

  preCompile() {
    // Create an off-screen render target
    const renderTarget = new THREE.WebGLRenderTarget(this.sizes.width, this.sizes.height)

    // Render to the off-screen buffer instead of the canvas
    this.renderer.instance.setRenderTarget(renderTarget)
    this.renderer.instance.render(this.scene, this.compileCamera.instance)
    this.renderer.instance.setRenderTarget(null) // Reset to canvas
  }

  async waitForCompile() {
    const startTime = performance.now()
    while (performance.now() - startTime < 2000) {
      this.preCompile()
      await new Promise((resolve) => setTimeout(resolve, 16)) // Approx 60fps cycle
    }

    this.compileCamera.controls.dispose()
    this.compileCamera.instance = null
    this.isCompiled = true
  }

  update() {
    if (!this.isCompiled) return // Skip rendering until compiled

    this.camera.update()
    this.renderer.update()
    this.world.update()
  }

  destroy() {
    this.sizes.off("resize")
    this.time.off("tick")

    // Traverse the whole scene
    this.scene.traverse((child) => {
      // Test if it's a mesh
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose()

        // Loop through the material properties
        for (const key in child.material) {
          const value = child.material[key]

          // Test if there is a dispose function
          if (value && typeof value.dispose === "function") {
            value.dispose()
          }
        }
      }
    })

    this.camera.controls.dispose()
    this.renderer.instance.dispose()

    if (this.debug.active) this.debug.ui.destroy()
  }
}
