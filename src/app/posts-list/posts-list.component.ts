import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  constructor(public dataService: DataService) {}

  posts = [
    {
    userId: '',
    id: '',
    title: '',
    body: ''
  }];

  ngOnInit() {
    this.dataService.getPosts().subscribe((response) =>
      {
        console.log(response);
        if(response){
          this.posts = JSON.parse(response);
        }
      }
    );
  }
}
