import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appHoghlight]'
})
export class HoghlightDirective {

  constructor(
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'red'
   }

}
