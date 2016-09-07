import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Post} from "./Post";

@Injectable()
export class AppService {

  constructor(private http: Http) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get('/app/data.json').map(
      res=>res.json());
  }
}
