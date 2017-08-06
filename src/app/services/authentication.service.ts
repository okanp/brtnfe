import { Component, Injectable, Input, Output, EventEmitter } from "@angular/core";
import { Http, Response, Headers, RequestOptions, ResponseContentType, URLSearchParams } from "@angular/http";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/toPromise";
import { ActivatedRoute, Router } from "@angular/router";


@Injectable()
export class AuthenticationService {
  private tokenSource = new Subject<any>();
  private token$ = this.tokenSource.asObservable();

  constructor(private http: Http, private router: Router) { }

  setLoggedIn(user) {
    const self = this;
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.tokenSource.next(user);
    self.router.navigate(["/frontpage"]);
  }

  getLoggedIn() {
    return this.token$;
  }
}
