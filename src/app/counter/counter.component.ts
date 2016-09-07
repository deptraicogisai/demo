import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() count : number = 0;
  @Output() countChange : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.count++ ;
    this.countChange.emit(this.count);
  }

}
