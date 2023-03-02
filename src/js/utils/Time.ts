import EventEmitter from "./EventEmitter.js";

export default class Time extends EventEmitter {
  private start: number;
  private current: number;
  private elapsed: number;
  private delta: number;
  private playing: boolean;
  private ticker: number;

  constructor() {
    super();

    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;
    this.playing = true;

    this.tick = this.tick.bind(this);
    this.tick();
  }

  play() {
    this.playing = true;
  }

  pause() {
    this.playing = false;
  }

  /**
   * Tick
   */
  private tick() {
    // Call tick method on each frame
    this.ticker = requestAnimationFrame(this.tick);

    // Get current time
    const current = Date.now();

    this.delta = current - this.current;
    this.elapsed = current - this.start;
    this.current = current;

    // fluid on < 60Hz
    if (this.delta > (1 / 60) * 1000) {
      this.delta = (1 / 60) * 1000;
    }

    // Add trigger event
    if (this.playing) this.trigger("tick");
  }

  /**
   * Stop
   */
  stop() {
    window.cancelAnimationFrame(this.ticker);
  }
}
