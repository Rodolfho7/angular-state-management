import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CounterModule } from './counter-state/counter.module';
import { ObjectStateModule } from './object-state/object-state.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // CounterModule,
    ObjectStateModule
  ],
  exports: [
    ObjectStateModule,
    // CounterModule
  ]
})
export class StateManagementModule { }
