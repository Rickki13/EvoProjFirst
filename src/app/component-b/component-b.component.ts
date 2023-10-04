import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";

export interface ResponseInt{
  id: string,
  userId: string,
  title: string,
  body: string
}
@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})

export class ComponentBComponent implements OnInit{
  constructor(private dataService: DataService, private route: ActivatedRoute) {}

  resp : ResponseInt = {
    id: '',
    userId: '',
    title: '',
    body: ''
  };

  ngOnInit() {
    this.route.data.subscribe((response ) =>
    {
      console.log(response)
      if (response) {
        this.resp = JSON.parse(response[0]);
      }
    });
  }
}
