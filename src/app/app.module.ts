import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { StateManagementModule } from './state-management/state-management.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    StateManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
