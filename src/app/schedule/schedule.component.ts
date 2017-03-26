import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss", "./dragula.min.css"]
})
export class ScheduleComponent implements OnInit {

  public groups: Array<any> = [
    {
      name: "Group A",
      items: [{ name: "Item A" }, { name: "Item B" }, { name: "Item C" }, { name: "Item D" }]
    },
    {
      name: "Group B",
      items: [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }, { name: "Item 4" }]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
