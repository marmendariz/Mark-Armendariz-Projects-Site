import {
  Input,
  Directive,
  ElementRef,
  HostBinding,
  OnChanges,
  HostListener
} from '@angular/core';
import { ColorWheel } from './color-wheel';
import 'color-thief';

//https://blog.angulartraining.com/tutorial-how-to-create-your-own-angular-directive-3532d7f31fab

@Directive({
  selector: '[appProjectBackground]'
})


/**
 *
 */
export class ProjectBackgroundDirective implements OnChanges {

  private el: ElementRef;
  private blurPixelAmount: string = "2px";
  private isBlurred: boolean = false;
  @Input() appProjectId: string;


  constructor(el: ElementRef) {
    this.el = el;
  }


  ngOnChanges() {
    this.setInitialStyles();
  }


  @HostListener('click') onClick() {
    if (!this.isBlurred) {
      var elementStyle = this.el.nativeElement.style;
      this.setClickedStyle(elementStyle);
      this.isBlurred = true;
    }
    else {
      var elementStyle = this.el.nativeElement.style;
      this.setUnclickedStyles(elementStyle);

      this.isBlurred = false;
    }
  }


  /**
   * */
  setInitialStyles() {
    var elementStyle = this.el.nativeElement.style;
    var htmlElement = this.el.nativeElement;

    if (htmlElement.tagName == "DIV") {
      elementStyle = this.el.nativeElement.parentElement.children[0].style;
    }

    htmlElement.parentElement.children[1].style.display = "none";
    
    var backgroundColor = this.getBackgroundColor();
    var imgUrl = "assets/img/project-img-" + this.appProjectId + ".jpg";
    elementStyle.background = "url('" + imgUrl + "')";
    elementStyle.backgroundPosition = "center";
    elementStyle.backgroundRepeat = "no-repeat";
    elementStyle.backgroundSize = "cover";
  }


  /**
   * 
   * @param elementStyle
   */
  setClickedStyle(elementStyle: any) {

    var htmlElement = this.el.nativeElement;
    if (htmlElement.tagName == "DIV") {
      elementStyle = this.el.nativeElement.parentElement.children[0].style;
    }

    htmlElement.parentElement.children[1].style.display = "block";


    var backgroundColor = this.getBackgroundColor();

    var imgUrl = "assets/img/project-img-" + this.appProjectId + ".jpg";
    elementStyle.background = "linear-gradient(" + backgroundColor + ", " + backgroundColor + "),url('" + imgUrl + "')";
    elementStyle.backgroundPosition = "center";
    elementStyle.backgroundRepeat = "no-repeat";
    elementStyle.backgroundSize = "cover";
    elementStyle.filter = "blur(" + this.blurPixelAmount +")";
  }


  /**
   * 
   * @param elementStyle
   */
  setUnclickedStyles(elementStyle: any) {
    var htmlElement = this.el.nativeElement;
    if (htmlElement.tagName == "DIV") {
      elementStyle = this.el.nativeElement.parentElement.children[0].style;
    }

    htmlElement.parentElement.children[1].style.display = "none";

    var imgUrl = "assets/img/project-img-" + this.appProjectId + ".jpg";
    elementStyle.background = "url('" + imgUrl + "')";
    elementStyle.backgroundPosition = "center";
    elementStyle.backgroundRepeat = "no-repeat";
    elementStyle.backgroundSize = "cover";
    elementStyle.filter = "blur(0px)";
  }



  /**
   *
   * */
  getBackgroundColor() {
    var min = 0;
    var colorWheel = new ColorWheel();
    var max = colorWheel.getNumberOfColors();
    var colorIndex = (parseInt(this.appProjectId)-1) % max;
    return colorWheel.getColorAtIndex(colorIndex);
  }

}
