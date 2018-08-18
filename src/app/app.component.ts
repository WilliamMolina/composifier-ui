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
  command = 'docker run -p 8080:8080 nginx + 70b3c241efbc';
  content = '';
  title = 'angular-electron';
  lista;
  window: BrowserWindow;
  constructor() {
    composerize(this.command).then((yaml) => {
      this.content = yaml;
    });
  }
  commandChanged = function(newCommand){
    composerize(newCommand).then((yaml) => {
      this.content = yaml;
    });
  }
}
