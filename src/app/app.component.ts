import { Component, ViewChild } from "@angular/core";
import { ScheduleComponent } from "./schedule/schedule.component";
import { FormControl, Validators } from "@angular/forms";
import { FrontpageComponent } from "./frontpage/frontpage.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";
import { InternalService } from "./services/internal.service";

import * as _ from "lodash";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild(FrontpageComponent) frontpage: FrontpageComponent;
  @ViewChild(UserMenuComponent) menu: UserMenuComponent;
  @ViewChild("sidenav") sidenav;

  constructor () {
  }

  onSideNavToggled(evt) {
    this.sidenav.toggle();
  }

}
