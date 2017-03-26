import { Component, OnInit } from "@angular/core";
import { RoutineService } from "../services/routine.service";
import { Routine } from "../models/routine.model";

import * as _ from "lodash";

@Component({
  moduleId: module.id,
  selector: "app-frontpage",
  templateUrl: "./frontpage.component.html",
  styleUrls: ["./frontpage.component.scss"]
})
export class FrontpageComponent implements OnInit {

  category: string;
  items: Routine[];
  colors = {
    header: ["rgba(194, 89, 117, 1)", "rgba(113, 123, 133, 1)", "rgba(83, 187, 180, 1)", "rgba(125, 102, 158, 1)",
    "rgba(92, 184, 96, 1)", "rgba(158, 77, 131, 1)", "rgba(100, 81, 128, 1)", "rgba(113, 123, 133, 1)", "rgba(99, 122, 145, 1)",
    "rgba(44, 150, 118, 1)", "rgba(48, 121, 171, 1)", "rgba(240, 146, 176, 1)"],
    action: ["rgba(194, 89, 117, 0.25)", "rgba(113, 123, 133, 0.25)", "rgba(83, 187, 180, 0.25)", "rgba(125, 102, 158, 0.25)",
    "rgba(92, 184, 96, 0.25)", "rgba(158, 77, 131, 0.25)", "rgba(100, 81, 128, 0.25)", "rgba(113, 123, 133, 0.25)", "rgba(99, 122, 145, 0.25)",
    "rgba(44, 150, 118, 0.25)", "rgba(48, 121, 171, 0.25)", "rgba(240, 146, 176, 0.25)"],
  };

  constructor(private serv: RoutineService) {
    this.category = "top";
    // this.items = this.serv.getRoutines({ "category": this.category });
  }

  ngOnInit(): void {
    this.search({ "category": null });
  }

  search(query) {
    console.log(JSON.stringify(query) + "searched");
    const self = this;
    this.serv.getRoutines(query).then(routines => {
      self.items = routines;
    });
  }

  onChangeCategory() {
    this.search({ "category": this.category });
  }

  onClickTag(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    this.search({ "tags": target.innerHTML });
  }

  onClickRoutine(id) {
    console.log(id);
  }

  onClickUpvote(_item) {
    const self = this;
    _.each(self.items, item => {
      if (item === _item) {
        item.upvoted++;
        return false;
      }
    });
  }

  onClickDownvote(_item) {
    const self = this;
    _.each(self.items, item => {
      if (item === _item) {
        item.upvoted--;
        return false;
      }
    });
  }
}
