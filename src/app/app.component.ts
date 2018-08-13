import { Component } from '@angular/core';
import { BrowserWindow } from 'electron';
const composerize = (<any>window).require("composerize-plus");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options = {
    lineNumbers: false,
    mode: 'yaml',
    theme: 'material',
    readOnly: false
  };
  content:string = 'docker run -p 8080:8080 nginx + 70b3c241efbc';
  title = 'angular-electron';
  lista;
  window: BrowserWindow;
  constructor() {
    this.content = 'docker run -p 8080:8080 nginx + 70b3c241efbc'; 
    composerize(this.content);
  }
  listarArchivos = function(){

  }

}
