import { Scene } from "three";

import Debug from "@utils/Debug.js";
import Sizes from "@utils/Sizes.js";
import Stats from "@utils/Stats.js";
import Time from "@utils/Time.js";
import Resources from "@utils/Loader.js";
import Mouse from "@utils/Mouse.js";
import { raycastPlugin } from "@utils/Raycaster.js";

import World from "@world/World.js";

import Camera from "@js/Camera.js";
import Renderer from "@js/Renderer.js";

export default class App {
  private static instance: App;

  public time: Time;
  public sizes: Sizes;
  public resources: Resources;
  public mouse: Mouse;
  public debug?: Debug;
  public stats?: Stats;
  public scene: Scene;
  public camera: Camera;
  public renderer: Renderer;
  public world: World;

  constructor(_canvas?: HTMLCanvasElement) {
    // Singleton
    if (App.instance) {
      return App.instance;
    }
    App.instance = this;

    // Options
    this.canvas = _canvas;

    if (!this.canvas) {
      console.error(`Missing 'canvas' property 🚫`);
      return;
    }

    // Setup
    this.time = new Time();
    this.sizes = new Sizes();

    this.setResources();
    this.setConfig();
    this.setDebug();
    this.setStats();
    this.setScene();
    this.setCamera();
    this.setMouse();
    this.setRenderer();
    this.setWorld();

    // Resize event
    this.sizes.on("resize", () => {
      this.resize();
    });

    // Time tick event
    this.time.on("tick", () => {
      this.update();
    });
  }

  private setConfig() {
    this.config = {};

    // Debug
    this.config.debug = window.location.hash === "#debug";
  }

  private setDebug() {
    if (this.config.debug) {
      this.debug = new Debug();
    }
  }

  private setStats() {
    if (this.config.debug) {
      this.stats = new Stats(true);
    }
  }

  private setScene() {
    this.scene = new Scene();
  }

  private setMouse() {
    this.mouse = new Mouse();
  }

  private setResources() {
    this.resources = new Resources();
  }

  private setCamera() {
    this.camera = new Camera();
  }

  private setRenderer() {
    this.renderer = new Renderer();
  }

  private setWorld() {
    this.world = new World();
  }

  public resize() {
    this.camera.resize();
    this.world.update();
    this.renderer.resize();
  }

  public update() {
    if (this.stats) this.stats.update();

    this.camera.update();

    if (this.world) this.world.update();

    if (this.renderer) this.renderer.update();
  }
}
