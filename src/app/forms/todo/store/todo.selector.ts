import {todoFeatureKey, TodoState} from './todos.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectTodoState = createFeatureSelector<TodoState>(todoFeatureKey);

export const selectTodos = createSelector(selectTodoState, (state: TodoState) => state && state.todos);