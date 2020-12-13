import { Com2Component } from './components/com2/com2.component';
import { Com1Component } from './components/com1/com1.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("com1") com1:Com1Component
  @ViewChild("com2") com2:Com2Component

  title = 'test';
  count = 0;

  onCLickCount(){
    this.count = this.count + 1;
  }

  onCom1Reset(value){
    this.count = value;
  }
  onCom2Reset(value){
    this.count = value;
  }

  onClickRun3(){
    this.com1.count = 99;
    this.com2.count = 11;
  }
}
