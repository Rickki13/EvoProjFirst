import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit{
  num = 0;

  ngOnInit(): void {
    setInterval(()=>{
      this.num += 1;
    }, 1000)
  }


}
