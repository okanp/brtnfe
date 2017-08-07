import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from "@angular/core";
import { InternalService } from "../services/internal.service";
import { Routine } from "../models/routine.model";

@Component({
  moduleId: module.id,
  selector: "app-criteria",
  templateUrl: "./criteria.component.html",
  styleUrls: ["./criteria.component.scss"]
})
export class CriteriaComponent implements AfterViewInit {

  @ViewChild("criteriabox") criteriabox;

  purpose = [
    {value: "fatburn", view: "Fat Burn"},
    {value: "strength", view: "Strength"},
    {value: "muscle", view: "Build Muscle"}
  ];

  level = [
    {value: "beginner", view: "Beginner"},
    {value: "intermediate", view: "intermediate"},
    {value: "advanced", view: "Advanced"}
  ];

  type = [
    {value: "cardio", view: "Cardio"},
    {value: "weightlifting", view: "Weightlifting"},
    {value: "crossfit", view: "Crossfit"},
    {value: "bodyweight", view: "Bodyweight"},
    {value: "dumbbellsonly", view: "Dumbbells-Only (Home)"},
    {value: "legs", view: "Split - Legs Only"},
    {value: "arms", view: "Split - Arms Only"},
    {value: "chest", view: "Split - Chest Only"},
    {value: "shoulders", view: "Split - Shoulders Only"},
    {value: "back", view: "Split - Back Only"}
  ];


  nutrition = false;

  bodyweight = false;

  home = false;

  minDays: number;

  maxDays: number;

  searchFocussed = false;

  model: Routine;

  constructor(private internalService: InternalService) {
    const self = this;
    self.model = new Routine();
    self.internalService.getFocussed().subscribe( (val) => {
      // self.searchFocussed = val;
    });
  }

  search() {
    const self = this;
    self.internalService.setFocussed(false);
  }

  cancel() {
    const self = this;
    self.internalService.setFocussed(false);
  }

  ngAfterViewInit() {
  }
}