import {Component, OnInit} from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EvoProjFirst';
  constructor(private meta: Meta)
  {
    this.meta.addTag({ property: 'og:desc', content: 'root_desc'});
  }
  ngOnInit() {
  }
}
