import { createAction, props } from '@ngrx/store';
import { Book } from '../shared';

export const loadBooks = createAction(
  '[Books] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Books] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Books] Load Books Failure',
  props<{ error: any }>()
);
