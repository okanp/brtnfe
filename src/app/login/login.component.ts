import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  moduleId: module.id,
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService) { }

  login() {
    const self = this;
    self.authService.setLoggedIn({name: "Okan"});
  }

  ngOnInit() { }
}