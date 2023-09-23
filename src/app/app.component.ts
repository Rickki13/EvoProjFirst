import { Component } from '@angular/core';
import {getLocaleDateFormat} from "@angular/common";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvoProjFirst';
  date_now = Date.now();
  num = 1;
}
