import { AmbientLight } from "three";

import Experience from "@js/Experience.js";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;

    this.setSunLight();

    // Debug
    if (this.debug) {
      this.setDebug();
    }
  }

  private setSunLight() {
    this.sunLight = new AmbientLight("#b5b5b5", 2);
    this.scene.add(this.sunLight);
  }

  private setDebug() {
    this.debug.setFolder("environment");
    this.debugFolder = this.debug.getFolder("environment");

    this.debugFolder.addInput(this.sunLight, "intensity", {
      min: 0,
      max: 10,
      step: 0.001,
      label: "sunLightIntensity",
    });

    this.debugFolder.addInput(this.sunLight, "color", {
      label: "sunLightColor",
    });
  }
}
