import {Injectable} from '@angular/core';
import {Task} from '../model/task.type';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
  }

  ngOnInit() {
    return this.tasks;
  }

  addTasks(name: string) {
    const newTask = {
      id: ++this.tasks.length,
      name: name,
    }
    this.tasks.push(newTask)
  }
}
