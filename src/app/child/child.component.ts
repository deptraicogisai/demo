import {Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-child',
  templateUrl: 'child.component.html',
  styleUrls: ['child.component.css']
})

export class ChildComponent implements OnInit {

  input : string;
  @Output() inputChange = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {
  }

  raiseEvent(){
     this.inputChange.emit("Raise event from child component");
  }

}
