import {Component, OnInit} from '@angular/core';
import {CounterComponent} from "../counter/counter.component";
import {NamepipePipe} from "../namepipe.pipe";
import {Post} from "../Post";
import {AppService} from "../app.service";


@Component({
  moduleId: module.id,
  selector: 'app-child-home',
  templateUrl: 'child-home.component.html',
  styleUrls: ['child-home.component.css'],
  directives: [CounterComponent],
  pipes: [NamepipePipe]
})
export class ChildHomeComponent implements OnInit {

  number1: number = 0;
  number2: number = 0;
  number3: number = 0;
  number4: number = 0;


  posts: Post[];

  constructor(private service: AppService) {
  }

  ngOnInit() {
    this.service.getPosts().subscribe(
      posts=> this.posts = posts
    );
  }

  onCountChanged(value: number) {
    this.number3 = value;
    this.number4 = value;
  }

}
