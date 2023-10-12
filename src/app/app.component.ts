import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private dataService: DataService) {}

  title = 'EvoProjFirst';

  users: any[] = [];
  getUsers(){
    this.dataService.getUsers().subscribe({
      next: (resp: any) => {
        this.users = Object.values(resp);
        console.log(resp);
      },
      error: (err: HttpErrorResponse) => {}
    });
  }
  ngOnInit() {
  }
}
