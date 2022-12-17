import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { deleteTodo, fetchTodos, saveOrUpdateTodo } from './store/todo.actions';
import { selectTodos } from './store/todo.selector';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  todoDescriptionFormControl = new FormControl('', [Validators.required]);
  todoIdFormControl = new FormControl(null, [Validators.required]);

  private unsubscribe = new Subject<void>();

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
    // this.todos = [
    //   {id: 1, description: 'Buy milk', done: true},
    //   {id: 2, description: 'Learn RxJS', done: false},
    //   {id: 3, description: 'Learn Angular', done: true},
    //   {id: 4, description: 'Learn NgRx', done: false},
    //   {id: 5, description: 'Learn Angular animation', done: true},
    // ];
    
    this.store.dispatch(fetchTodos());

    this.store.pipe(
      select(selectTodos),
      takeUntil(this.unsubscribe)
      ).subscribe(todos => {
        this.todos = todos;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  undoOrCompleteTodo(todo: Todo) {
    // this.todos = this.todos
    //   .map(
    //     todo => todo.id === item.id 
    //       ? {...todo, done: !todo.done} 
    //       : todo
    //   );
   
    // const todo: Todo = {...item, done: !item.done};
    this.store.dispatch(saveOrUpdateTodo({todo, isUpdate: true}));
  }

  deleteTodo(todoId: number) {
    // const todo = this.todos.find(todo => todo.id === todoId);
    // if (todo) {
    //   this.todos.splice(this.todos.indexOf(todo), 1);
    // }
    this.store.dispatch(deleteTodo({todoId}));
  }

  addTodo(): void {
    if (this.todoIdFormControl.value && this.todoIdFormControl.value >= 0 && !this.todos.find(t => t.id === this.todoIdFormControl.value)) {
      const todo: Todo = {
        id: this.todoIdFormControl.value,
        description: this.todoDescriptionFormControl.value ?? '',
        done: false
      }
      // this.todos.push(todo);
      this.store.dispatch(saveOrUpdateTodo({todo, isUpdate: false}));
    }
  }
}
