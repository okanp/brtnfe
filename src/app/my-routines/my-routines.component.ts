import * as _ from "lodash";
import { Component, ViewChild, HostListener, AfterViewChecked } from "@angular/core";
import { Router } from "@angular/router";
import { RoutineService } from "../services/routine.service";

@Component({
  selector: "app-my-routines",
  templateUrl: "my-routines.component.html",
  styleUrls: ["my-routines.component.scss"]
})
export class MyRoutinesComponent {
  private cols: string[];
  private data;

  constructor(private routineService: RoutineService) {
    const self = this;
    self.cols = ["name", "length", "level", "workoutsweekly", "type", "purpose"];
    self.routineService.getRoutines({}).then(routines => {
      self.data = routines;
    });
  }

}
