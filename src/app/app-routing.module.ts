import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./components/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "page1",
    loadChildren: () =>
      import("./components/page1/page1.module").then(m => m.Page1Module)
  },
  {
    path: "page2",
    loadChildren: () =>
      import("./components/page2/page2.module").then(m => m.Page2Module)
  },
  {
    path: "page3",
    loadChildren: () =>
      import("./components/page3/page3.module").then(m => m.Page3Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
