import { Component, OnInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "app-signup",
  templateUrl: "signup.component.html",
  styleUrls: ["signup.component.scss"]
})
export class SignupComponent implements OnInit {

  genders = [
    {value: "male", view: "Male"},
    {value: "female", view: "Female"}
  ];

  constructor() { }

  ngOnInit() { }
}