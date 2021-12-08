import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, TaskService } from '..';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTasksComponent implements OnInit {

  @ViewChild('taskForm', {static : true}) taskForm: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.task = this.taskService.getById(id);
  }

  update(): void {
    if (this.taskForm.form.valid) {
      this.taskService.update(this.task);
      this.router.navigate(['/tasks']);
    }
  }


}
