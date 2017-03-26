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
  @ViewChild("searchbox") searchBox;
  @ViewChild("sidenav") sidenav;

  isFocussed: boolean = false;
  public searchKey: string;

  constructor (private internalService: InternalService) {
  }

  onFocusSearch() {
    const self = this;
    self.isFocussed = true;
    self.internalService.setFocussed(true);
  }

  onBlurSearch() {
    const self = this;
    self.isFocussed = false;
    self.internalService.setFocussed(false);
  }

  onClickToggleSearchBox() {
    const self = this;
    self.isFocussed = true;
    setTimeout(function(){
      self.searchBox.nativeElement.focus();
    }, 100);
  }

  onSideNavToggled(evt) {
    this.sidenav.toggle();
  }

  search(evt) {
    this.frontpage.search(this.searchKey);
  }

}
