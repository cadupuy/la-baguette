export default class Maths {
  static clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }
  static lerp(x: number, y: number, t: number) {
    return (1 - t) * x + t * y;
  }

  static map(value: number, start1: number, stop1: number, start2: number, stop2: number) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  }

  static round(x: number, d: number) {
    return Number(x.toFixed(d));
  }
}
