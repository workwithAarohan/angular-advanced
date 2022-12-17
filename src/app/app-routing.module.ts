import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoidComponent } from './components/void/void.component';
import { TodoComponent } from './forms/todo/todo.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: VoidComponent},
  {
    path: 'todo', 
    loadChildren: () => import('./forms/todo/todo.module').then(m=> m.TodoModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
