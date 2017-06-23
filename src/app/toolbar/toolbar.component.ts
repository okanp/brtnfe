import { Component, OnInit, ViewChild, EventEmitter, Output } from "@angular/core";
import { InternalService } from "../services/internal.service";
import { UserMenuComponent } from "../user-menu/user-menu.component";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {

  searchBoxDisplayed = false;

  constructor(private internalService: InternalService) { }

  ngOnInit() {
    const self = this;
  }

  onClickToggleSearchBox() {
    const self = this;
    self.searchBoxDisplayed = !self.searchBoxDisplayed;
  }

}
