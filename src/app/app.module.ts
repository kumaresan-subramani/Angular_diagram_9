import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the DiagramMOdule for the Diagram component
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-diagrams module into NgModule
  imports:      [ BrowserModule, DiagramModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }