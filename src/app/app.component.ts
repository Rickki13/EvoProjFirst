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
  enableNum: boolean = false;
  enableNumRand: boolean = false;

  enableIntervalOperator(){
    const intervalStream$ = interval(2000)
    if (!this.enableNum){
      this.intervalSubscrip$ = intervalStream$.subscribe((value) => {
        this.numArray.push(value);
        this.enableNum = true;
      })
    }
    if(!this.enableNumRand){
      this.intervalSubscripRand$ = intervalStream$.pipe(
        map(value => `Random Value: ${Math.floor(getRandom(0,1000)) }`)
      ).subscribe((value) => {
        this.numArrayRand.push(value);
        this.enableNumRand = true;
      })
    }
  }

  disableIntervalOperator(){
    this.intervalSubscrip$.unsubscribe();
    this.enableNum = false;
  }

  disableIntervalOperatorRand(){
    this.intervalSubscripRand$.unsubscribe();
    this.enableNumRand = false;
  }
}

function getRandom(min: number, max: number){
  return Math.random() * (max - min) + min;
}
