import { Component, OnInit, ViewChild, EventEmitter, Output } from "@angular/core";
import { InternalService } from "../services/internal.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {

  isFocussed = false;
  searchKey: string;
  @Output("searchEvent") searchEvent: EventEmitter<string> = new EventEmitter();
  @ViewChild("searchbox") searchBox;

  constructor(private internalService: InternalService) { }

  ngOnInit() {
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

  search(evt) {
    this.searchEvent.next(this.searchKey);
  }

}
