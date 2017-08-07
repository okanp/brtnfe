import { Component, OnInit, ViewChild, EventEmitter, Output } from "@angular/core";
import { InternalService } from "../services/internal.service";
import { UserMenuComponent } from "../user-menu/user-menu.component";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {

  searchBoxDisplayed = false;

  loggedIn = false;

  user;

  constructor(private internalService: InternalService, private authenticationService: AuthenticationService) { 
    const self = this;
    this.authenticationService.getLoggedIn().subscribe(
      data => {
        if (data != null) {
          self.user = data;
          self.loggedIn = true;
        } else {
          self.user = null;
          self.loggedIn = false;
        }
      }
    );
  }

  ngOnInit() {
    const self = this;
  }

  onClickToggleSearchBox() {
    const self = this;
    self.searchBoxDisplayed = !self.searchBoxDisplayed;
  }

}
