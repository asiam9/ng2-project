/// <reference path="../typings/browser.d.ts" />
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {AppComponent} from './app.component'
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';

import {enableProdMode} from '@angular/core';
enableProdMode();

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);