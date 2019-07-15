import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Pipes";

  todaydate = new Date();
  jsonval = {
    name: "Rox",
    age: "25",
    address: { a1: "Mumbai", a2: "Karnataka" }
  };
  months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];
}
