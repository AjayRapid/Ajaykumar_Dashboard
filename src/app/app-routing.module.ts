import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazy loading modules
  {
    path: "",
    loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule)
  },

  //We can create multiple modules and lazy load here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
