import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Com1Component } from "./comp1/comp1.component";
import { Com2Component } from "./comp2/comp2.component";

@NgModule({
  declarations: [Com1Component, Com2Component],
  imports: [CommonModule],
  exports: [Com1Component, Com2Component]
})
export class FirstModuleModule {}
