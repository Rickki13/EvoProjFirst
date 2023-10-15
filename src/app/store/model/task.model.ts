export interface TodoInterface {
  tasks: string[];
}

export class AddTask {
  static readonly type = '[Tasks]: Add Task';
  constructor(public task: string) {}
}

export class DeleteTask {
  static readonly type = '[Tasks]: Delete Task';
  constructor(public task: string) {}
}


