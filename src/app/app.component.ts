import {Component} from '@angular/core';
import {ChildComponent} from "./child/child.component";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ChildComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {
  title = 'Hihi Đồ Ngốc!';


}
