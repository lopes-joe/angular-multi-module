import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '..';

@Component({
  selector: 'app-getall-task',
  templateUrl: './getall-task.component.html',
  styleUrls: ['./getall-task.component.css'],
})
export class GetallTaskComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.getAll();
    // this.tasks = [
    //   new Task(1, "Task 1", false),
    //   new Task(1, "Task 1", true),
    // ]
  }

  getAll(): Task[] {
    return this.taskService.getAll();
  }

  remove($event: any, task: Task): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + task.name + '"?')) {
      this.taskService.remove(task.id);
      this.tasks = this.taskService.getAll();
    }
  }

  changeStatus(task: Task): void {
    if (confirm('Deseja alterar o status da tarefa "' + task.name + '"?')) {
      this.taskService.changeStatus(task.id);
      this.tasks = this.taskService.getAll();
    }
  }
}
