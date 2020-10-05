import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JvIfDirective } from './jv-if.directive';
import { JvForDirective } from './jv-for.directive';
import { JvChildComponent } from './child.component';
import { JvSwitchCaseDirective, JvSwitchDirective } from './jv-switch.directive';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    JvIfDirective,
    JvForDirective,
    JvChildComponent,
    JvSwitchDirective,
    JvSwitchCaseDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
