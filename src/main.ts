import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppComponent, environment} from './app/';
import {APP_ROUTER_PROVIDERS} from "./app/app.route";
import {HTTP_PROVIDERS} from "@angular/http";
import {AppService} from "./app/app.service";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS , AppService]);
