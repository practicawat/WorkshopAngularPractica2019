import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appSchimbaText]"
})
export class SchimbaTextDirective {
  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = "Test modificat de directiva!";
  }
}
