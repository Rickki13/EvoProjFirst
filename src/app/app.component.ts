import { Component } from '@angular/core';
import {interval, map, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvoProjFirst';

  constructor() {}

  intervalSubscrip$!: Subscription;
  intervalSubscripRand$!: Subscription;
  numArray : number[] = [];
  numArrayRand : string[] = [];

  enableIntervalOperator(){
    const intervalStream$ = interval(2000)
    this.intervalSubscrip$ = intervalStream$.subscribe((value) => {
        this.numArray.push(value);
    })
    this.intervalSubscripRand$ = intervalStream$.pipe(
      map(value => `Random Value: ${Math.floor(getRandom(0,1000)) }`)
    ).subscribe((value) => {
      this.numArrayRand.push(value);
    })
  }

  disableIntervalOperator(){
    this.intervalSubscrip$.unsubscribe();
  }

  disableIntervalOperatorRand(){
    this.intervalSubscripRand$.unsubscribe();
  }
}

function getRandom(min: number, max: number){
  return Math.random() * (max - min) + min;
}
