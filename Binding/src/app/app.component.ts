import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //Variabila string
  title = "Binding exercise";
  //Multime de stringuri
  zileSaptamana = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"];
  //Variabila booleana
  booleanVar = true;
}

