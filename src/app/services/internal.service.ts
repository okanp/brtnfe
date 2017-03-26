import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";

@Injectable()
export class InternalService {

  private searchFocussedSource = new Subject<boolean>();
  private searchFocussed$ = this.searchFocussedSource.asObservable();

  setFocussed(val: boolean) {
    this.searchFocussedSource.next(val);
  }
  getFocussed(): Observable<boolean> {
    return this.searchFocussed$;
  }
}
