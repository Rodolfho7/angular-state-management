import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MyObjectsComponent } from './my-objects/my-objects.component';

@NgModule({
  declarations: [
    MyCounterComponent,
    MyObjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyCounterComponent,
    MyObjectsComponent
  ]
})
export class ComponentsModule { }
