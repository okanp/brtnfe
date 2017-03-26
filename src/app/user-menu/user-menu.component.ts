import { Component, OnInit, ViewChild, Output, EventEmitter } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "app-user-menu",
  templateUrl: "./user-menu.component.html",
  styleUrls: ["./user-menu.component.scss"]
})
export class UserMenuComponent implements OnInit {
  @Output() toggled:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  onToggleSidenav() {
    this.toggled.emit("toggleSideNav");
  }
}