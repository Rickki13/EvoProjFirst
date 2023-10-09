import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from "./error/error.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostComponent } from "./post/post.component";
import { RolesGuard } from "./roles.guard";
import { EditPostComponent } from "./edit-post/edit-post.component";

const routes: Routes = [
/*  {
    path: '',
    redirectTo: 'posts-list',
    pathMatch: 'full'
  },*/
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'posts-list',
    component: PostsListComponent,
    children: [
      {
        path: 'post/:id',
        component: PostComponent,
        canActivateChild: [RolesGuard],
        children: [
          {
            path: 'edit-post',
            component: EditPostComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
