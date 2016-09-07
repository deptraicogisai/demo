import {ChildComponent} from "./child/child.component";
import {provideRouter, RouterConfig} from "@angular/router";
import {ChildHomeComponent} from "./child-home/child-home.component";
import {HomeComponent} from "./home/home.component";
import {SecondChildHomeComponent} from "./second-child-home/second-child-home.component";

export const routes: RouterConfig = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: '', redirectTo: 'child-home', pathMatch: 'full'},
      {path: 'child-home', component: ChildHomeComponent},
      {path: 'second-child', component: SecondChildHomeComponent},
    ]
  }
];

// Export routes
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
