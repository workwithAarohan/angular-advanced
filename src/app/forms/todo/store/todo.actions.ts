// todo.actions.ts
import {createAction, props} from '@ngrx/store';
import { Todo } from '../todo.model';

export const saveOrUpdateTodo = createAction(
  '[Todo Component] Save or Update Todo',
  props<{todo: Todo, isUpdate: boolean}>()
);

export const deleteTodo = createAction(
  '[Todo Component] Delete Todo',
  props<{todoId: number}>()
);