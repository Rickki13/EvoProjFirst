import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private data: PostComponent,
    private dataService: DataService,
    private router: Router
  ) {}

  role = this.dataService.role;
  curId: number = 0;

  post = {
    userId: '',
    id: '',
    title: '',
    body: ''
  };

  ngOnInit() {
    this.curId = this.route.snapshot.params['id'];
    this.post = this.data.post;
  }
}
