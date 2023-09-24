import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {ItemPageComponent} from "./item-page/item-page.component";
import {DetailsComponent} from "./item-page/details/details.component";
import {ListComponent} from "./item-page/list/list.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'item/:id',
    component: ItemPageComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
