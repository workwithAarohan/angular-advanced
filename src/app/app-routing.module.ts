import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoidComponent } from './components/void/void.component';
import { TodoComponent } from './forms/todo/todo.component';

const routes: Routes = [
  {path: '', component: VoidComponent},
  {
    path: 'todo', 
    loadChildren: () => import('./forms/todo/todo.module').then(m=> m.TodoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
