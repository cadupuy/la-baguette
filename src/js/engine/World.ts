import Experience from "@js/Experience.js";

import Environment from "@world/Environment.js";
import Item from "@world/Item.js";

export default class World {
  #experience;
  #scene;
  #resources;

  constructor() {
    this.#experience = new Experience();
    this.#scene = this.#experience.scene;
    this.#resources = this.#experience.resources;

    this.#resources.on("ressourcesReady", () => {
      // Setup

      this.#setEnvironment();
      this.#setItem();
      this.#setLocker();
      this.#setSpline();
    });
  }

  #setItem() {
    this.item = new Item();
  }

  #setEnvironment() {
    this.environment = new Environment();
  }

  update() {
    if (this.item) this.item.update();
  }

  destroy() {}
}
