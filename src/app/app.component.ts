import {Component, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {DynTableComponent} from "./dyn-table/dyn-table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'EvoProjFirst';

  @ViewChild('dynTable', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<DynTableComponent>;

  addComponent() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(DynTableComponent);
  }

  deleteComponent() {
    this.viewRef.clear();
  }
}
