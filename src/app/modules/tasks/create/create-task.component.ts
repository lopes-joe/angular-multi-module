import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task, TaskService } from '..';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  
  @ViewChild('taskForm', {static: true}) taskForm: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.task = new Task();
  }

  create():void {
    if(this.taskForm.form.valid) {
      this.taskService.create(this.task);
      this.router.navigate(["/tasks"]);
    }
  }

}
