import { Component, OnInit, } from "@angular/core";

import { AuthService } from "./auth/auth.service";
import { MenuService } from "./shared/services/menu.service";
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
import { RouterOutlet } from "@angular/router";
import { slider } from './slider';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slider]
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public menuService: MenuService
  ) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
 }

  ngOnInit() {

    this.authService.autoAuthUser();

    // this.errorSub = this.errorService.getErrorListener().subscribe(
    //   message => this.hasError = message !== null
    // );
  }

  // ngOnDestroy() {
  //   this.errorSub.unsubscribe();
  // }
}
