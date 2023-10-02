import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit{
  constructor(private dataService: DataService) {}

  resp = '';

  ngOnInit() {
    this.dataService.resolveRoute().subscribe((response) =>{
      this.resp = response;
    })
  }
}
