import { Component } from '@angular/core';
import {DataService} from "./data.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvoProjFirst';
  constructor(
    private dataService: DataService
  ) {}

  getPosts() {
    this.dataService.getAllPosts().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  getComments() {
    this.dataService.getAllComments().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  postBody() {
    this.dataService.postAllBody().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  getErrors() {
    this.dataService.getAllErrors().subscribe({
      next: (response) => {
        console.log();
      },
      error: (err: HttpErrorResponse) => {
        console.log('Error #' + err.status);
      }
    })
  }

  getHeaders() {
    this.dataService.getAllHeaders().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  deletePost() {
    this.dataService.deletePosts().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
}
