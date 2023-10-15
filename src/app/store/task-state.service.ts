import {Action, Selector, State, StateContext} from "@ngxs/store";
import {TodoInterface, AddTask, DeleteTask} from "./model/task.model";
import {Injectable} from "@angular/core";

@State<TodoInterface>({
  name: 'TaskState',
  defaults: {
    tasks: []
  }
})
@Injectable()
export class TaskState {
  @Selector()
  static getTasks(state: TodoInterface){
    return state.tasks;
  }

  @Action(AddTask)
  addTask(ctx: StateContext<TodoInterface>, action: AddTask) {
    const state = ctx.getState();
    ctx.patchState({
      tasks: [...state.tasks, action.task]
    })
  }

  @Action(DeleteTask)
  deleteTask(ctx: StateContext<TodoInterface>, action: AddTask) {
    const state = ctx.getState();
    const taskIndex = state.tasks.indexOf(action.task);
    const updatedTasks = [...state.tasks.slice(0, taskIndex), ...state.tasks.slice(taskIndex + 1)];
    ctx.patchState({
      tasks: updatedTasks
    });
  }
}
