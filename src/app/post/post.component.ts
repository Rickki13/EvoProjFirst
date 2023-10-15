import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostsListComponent} from "../posts-list/posts-list.component";
import {DataService} from "../data.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private data: PostsListComponent,
    private dataService: DataService,
    private router: Router
  ) {}

  // role = this.dataService.role;

  curId: number = 0;

  post = {
    userId: '',
    id: '',
    title: '',
    body: ''
  };

  checkBtn(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const currentUrl = this.router.url + '?';
    this.router.navigateByUrl(currentUrl)
      .then(() => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => true;
      });
  }
  ngOnInit() {
    this.curId = this.route.snapshot.params['id'];
    this.post = this.data.posts[this.curId];
  }
}
