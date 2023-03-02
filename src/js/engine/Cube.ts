import Experience from "@js/Experience.js";
export default class Item {
  private experience: any;
  private camera: any;
  private scene: any;
  private resources: any;
  private time: any;
  private debug: any;

  constructor() {
    this.experience = new Experience();
    this.camera = this.experience.camera;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;

    this.setModel();

    // Debug
    if (this.debug) {
      this.setDebug();
    }
  }

  setModel() {
    console.log("cube");
  }

  setDebug() {
    this.debug.setFolder("cube");
    this.debugFolder = this.debug.getFolder("cube");
  }
}
