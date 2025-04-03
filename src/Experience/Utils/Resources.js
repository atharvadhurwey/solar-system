import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import EventEmitter from "./EventEmitter.js"
import Experience from "../Experience.js"

export default class Resources extends EventEmitter {
  constructor(sources) {
    super()

    this.experience = new Experience()
    this.renderer = this.experience.renderer.instance
    this.sources = sources

    this.items = {}
    this.toLoad = this.sources.length
    this.loaded = 0

    this.setLoaders()
    this.startLoading()
  }

  setLoaders() {
    this.loaders = {}
    this.loaders.gltfLoader = new GLTFLoader()
    this.loaders.textureLoader = new THREE.TextureLoader()
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
  }

  startLoading() {
    // Load each source
    for (const source of this.sources) {
      if (source.type === "gltfModel") {
        this.loaders.gltfLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file)
        })
      } else if (source.type === "texture") {
        this.loaders.textureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file)
        })
      } else if (source.type === "cubeTexture") {
        this.loaders.cubeTextureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file)
        })
      }
    }
  }

  sourceLoaded(source, file) {
    this.items[source.name] = file

    // Preload textures to avoid frame drops due to decode and GPU upload overhead
    // Handle non sRGB textures
    // Handle textures that need to be repeated
    // (took one night sleep to fix this fps drop issue)
    if (!source.nonSRGB) {
      this.items[source.name].colorSpace = THREE.SRGBColorSpace
    }
    if (source.repeat) {
      this.items[source.name].wrapS = THREE.RepeatWrapping
      this.items[source.name].wrapT = THREE.RepeatWrapping
    }
    this.renderer.initTexture(this.items[source.name])

    this.loaded++

    if (this.loaded === this.toLoad) {
      this.finishLoading()
      this.trigger("ready")
    }
  }

  finishLoading() {
    const loadingScreen = document.getElementById("loading-screen")
    loadingScreen.style.opacity = "0"
    loadingScreen.style.display = "none"
  }
}
