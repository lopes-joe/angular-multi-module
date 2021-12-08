import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { TaskService } from './shared';
import { CreateTaskComponent } from './create/create-task.component';
import { GetallTaskComponent } from './getall/getall-task.component';
import { UpdateTasksComponent } from './update/update-task.component';
import { ConcludedTaskDirective } from './shared/concluded-task.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    GetallTaskComponent,
    CreateTaskComponent,
    UpdateTasksComponent,
    ConcludedTaskDirective
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }