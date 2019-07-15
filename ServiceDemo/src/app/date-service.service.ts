import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DateServiceService {
  constructor() {}

  getCurrentDate() {
    let ndate = new Date();
    return ndate;
  }
}
