import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit{
  constructor(private activateRouter: ActivatedRoute) {}
  params(){
    console.log(this.activateRouter.snapshot.params)
  }
  ngOnInit() {

  }
}
