import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CellCultureComponent } from './cellCulture/cell-culture.component';

@NgModule({
  declarations: [
    AppComponent,
    CellCultureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
