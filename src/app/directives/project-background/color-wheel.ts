import 'color-thief';

/**
 * Color Wheel defined for 
 * */
export class ColorWheel{

  colorWheel: string[];

  constructor() {
    this.colorWheel = [
      "rgba(12,78,138,0.55)", //main theme blue,
      //"rgba(255,255,255,0.55)", //white,
      "rgba(0,    0,  0,0.55)"
    ];
  }

  getColorAtIndex(i: number) {
    return this.colorWheel[i];
  }

  getNumberOfColors() {
    return this.colorWheel.length;
  }

}
