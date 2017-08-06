import { Component, OnInit } from "@angular/core";
import { RoutineService } from "../services/routine.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as $ from "jquery";
import { Routine } from "../models/routine.model";

@Component({
  moduleId: module.id,
  selector: "app-routine",
  templateUrl: "./routine.component.html",
  styleUrls: ["./routine.component.scss"]
})
export class RoutineComponent implements OnInit {

  routine: Routine = new Routine();

  constructor(private route: ActivatedRoute, private router: Router, private routineService: RoutineService) { }

  ngOnInit(): void {
    const self = this;
    this.route.params
      .switchMap((params) => this.routineService.getRoutine(+params["id"]))
      .subscribe(routine => {
        self.routine = routine;
      });
    const header = $("#routine-header").offset();
    $(window).scroll(function () {
      if ($(window).scrollTop() > header.top - 64) {
        $("#routine-header").addClass("routine-header-fixed").removeClass("routine-header-static");
      } else {
        $("#routine-header").addClass("routine-header-static").removeClass("routine-header-fixed");
      }
    });
  }

  onClickUpvote(_item) {
    const self = this;
  }

  onClickDownvote(_item) {
    const self = this;
  }

  onClickFavorite() {
    const self = this;
    self.routine.starred++;
  }

  onClickFork() {
    const self = this;
    self.router.navigate(["/build", self.routine.id]);
  }
}
