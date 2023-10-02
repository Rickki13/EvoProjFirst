import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getAllComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments', { params: {postId: 1} })
  }

  postAllBody() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {})
  }

  getAllErrors() {
    return this.http.get('https://jsonplaceholder.typicode.com/post')
  }

  getAllHeaders() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {headers: {'X-Test': '1'}, responseType: 'text'})
  }

  deletePosts() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
  }

  resolveRoute() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1', {responseType: 'text'})
  }
}
