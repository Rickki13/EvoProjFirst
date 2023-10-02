import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentBComponent } from "./component-b/component-b.component";
import { PreFetchingResolver } from "./pre-fetching.resolver";

const routes: Routes = [
  {
    path: 'res',
    component: ComponentBComponent,
    resolve: [PreFetchingResolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
