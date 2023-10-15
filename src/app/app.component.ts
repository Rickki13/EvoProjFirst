import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {TaskState} from "./store/task-state.service";
import {AddTask, DeleteTask} from "./store/model/task.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'EvoProjFirst';

  @Select(TaskState.getTasks)
  tasks: Observable<string[]> | undefined;

  constructor(private store: Store) {}

  text = '';

  updateStore() {
    this.store.dispatch(
      new AddTask(this.text)
    );
    this.text = '';
  }

  deleteStore(task: string) {
    this.store.dispatch(
      new DeleteTask(task)
    );
  }
}
