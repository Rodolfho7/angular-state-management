import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { objectReducer } from './reducers/object.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ objects: objectReducer })
  ],
  exports: [
    StoreModule
  ]
})
export class ObjectStateModule { }
