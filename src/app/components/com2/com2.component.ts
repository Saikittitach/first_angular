import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.css']
})
export class Com2Component implements OnInit {

  @Input() count = 0;
  @Output() onReset = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onClickReset2(){
    this.onReset.emit(-1);
  }
}
