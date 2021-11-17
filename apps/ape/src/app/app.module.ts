import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EntityFormModule } from '@tdschreur/entity-form';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, EntityFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
