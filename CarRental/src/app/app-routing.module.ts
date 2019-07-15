import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CarListComponent } from "./car-list/car-list.component";
import { CarAdminComponent } from "./car-admin/car-admin.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "car-list", component: CarListComponent },
  { path: "car-admin", component: CarAdminComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponent = [
  HomeComponent,
  CarListComponent,
  CarAdminComponent,
  ContactComponent
];

