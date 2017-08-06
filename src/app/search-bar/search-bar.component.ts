import { Component, OnInit, ViewChild, EventEmitter, Output, HostListener } from "@angular/core";
import { InternalService } from "../services/internal.service";
import { UserMenuComponent } from "../user-menu/user-menu.component";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {

  isFocussed = false;
  searchKey: string;
  @Output("searchEvent") searchEvent: EventEmitter<string> = new EventEmitter();
  @ViewChild("searchbox") searchBox;
  @ViewChild("criteria") criteria;

  constructor(private internalService: InternalService) { }

  ngOnInit() {
  }

  // thisElementClicked = false;

  // @HostListener("click", ["$event"])
  // onLocalClick(event: Event) {
  //     this.thisElementClicked = true;
  // }

  // @HostListener("document:click", ["$event"])
  // onClick(event: Event) {
  //   const self = this;
  //   if (!this.thisElementClicked) {
  //       self.internalService.setFocussed(false);
  //   }
  //   this.thisElementClicked = false;
  // }

  onFocusSearch() {
    const self = this;
    self.isFocussed = true;
    self.internalService.setFocussed(true);
  }

  onBlurSearch() {
    const self = this;
    self.isFocussed = false;
    // self.internalService.setFocussed(false);
  }

  search(evt) {
    this.searchEvent.next(this.searchKey);
  }

}