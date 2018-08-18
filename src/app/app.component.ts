import { Component } from '@angular/core';
import { BrowserWindow } from 'electron';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
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
  placeholder = 'Write a docker run/create command';
  commands = [];
  content = '';
  title = 'angular-electron';
  lista;
  window: BrowserWindow;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'add_circle_outline',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-add_circle_outline-24px.svg'));
  }
  commandChanged = function(newCommand){ 
    let comms = this.commands.map(value => {
      return value.text;
    }).join(' + ');
    composerize(comms).then((yaml) => {
      this.content = yaml;
    });
  }
  addCommand = function(){
    this.commands.push({text:''});
  }
}
