import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path:'form', component: UsersFormComponent},
  {path:'form/:id', component: UsersFormComponent},
  {path: 'todo', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
