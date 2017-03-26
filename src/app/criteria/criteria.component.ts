import { Component, OnInit } from "@angular/core";
import { InternalService } from "../services/internal.service";

@Component({
  moduleId: module.id,
  selector: "app-criteria",
  templateUrl: "./criteria.component.html",
  styleUrls: ["./criteria.component.scss"]
})
export class CriteriaComponent implements OnInit {
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
    {value: "dumbbellsonly", view: "Dumbbells-Only (Home)"}
  ];


  nutrition = false;

  bodyweight = false;

  home = false;

  minDays: number;

  maxDays: number;

  searchFocussed = false;

  constructor(private internalService: InternalService) {
    const self = this;
    self.internalService.getFocussed().subscribe( (val) => {
      self.searchFocussed = val;
    });
  }

  ngOnInit() { }
}