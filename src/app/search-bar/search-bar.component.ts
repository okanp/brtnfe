import { Component, OnInit, ViewChild, EventEmitter, Output } from "@angular/core";
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

  onFocusSearch() {
    const self = this;
    self.isFocussed = true;
    self.internalService.setFocussed(true);
    const elSearch: HTMLElement = document.getElementById("middle-container");
    const elCriteria =  self.criteria.nativeElement;
    if (elSearch && elCriteria) {
      // console.log("asdad", elSearch.offsetWidth);
      // elCriteria.offsetLeft = elSearch.offsetLeft;
      // elCriteria.width = elSearch.offsetWidth;
    }
  }

  onBlurSearch() {
    const self = this;
    self.isFocussed = false;
    self.internalService.setFocussed(false);
  }

  search(evt) {
    this.searchEvent.next(this.searchKey);
  }

}
