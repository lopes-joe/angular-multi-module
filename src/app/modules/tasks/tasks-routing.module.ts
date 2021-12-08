import { Routes } from "@angular/router";
import { CreateTaskComponent } from "./create";
import { GetallTaskComponent } from "./getall";
import { UpdateTasksComponent } from "./update";

export const TasksRoutes: Routes = [
    // atalho para a listagem
    {
        path: 'tasks',
        redirectTo: 'tasks/getall'
    },
    {
        path: 'tasks/getall',
        component: GetallTaskComponent
    },
    {
        path: 'tasks/create',
        component: CreateTaskComponent
    },
    {
        path: 'tasks/update/:id',
        component: UpdateTasksComponent
    },

]