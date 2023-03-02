export default class Easing {
  static linear(t: number) {
    return t;
  }

  static easeInQuad(t: number) {
    return t * t;
  }

  static easeOutQuad(t: number) {
    return t * (2 - t);
  }

  static easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  static easeInCubic(t: number) {
    return t * t * t;
  }

  static easeOutCubic(t: number) {
    return --t * t * t + 1;
  }

  static easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  static easeInQuart(t: number) {
    return t * t * t * t;
  }

  static easeOutQuart(t: number) {
    return 1 - --t * t * t * t;
  }

  static easeInOutQuart(t: number) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  }

  static easeInQuint(t: number) {
    return t * t * t * t * t;
  }

  static easeOutQuint(t: number) {
    return 1 + --t * t * t * t * t;
  }

  static easeInOutQuint(t: number) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }

  static easeInExpo(t: number) {
    return Math.Pow(2, 10 * (t - 1));
  }

  static easeOutExpo(t: number) {
    return -Math.pow(2, -10 * t) + 1;
  }

  static easeInOutExpo(t: number) {
    t *= 2.0;
    return t < 1.0 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (-Math.pow(2, -10 * --t) + 2);
  }

  static easeOutBack(t: number, tension = 2.0) {
    t -= 1;
    return t * t * ((tension + 1) * t + tension) + 1;
  }

  static easeInBack(t: number, tension = 2.0) {
    return t * t * ((tension + 1) * t - tension);
  }
}
