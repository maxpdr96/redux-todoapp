import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { createTodo } from './todo.actions';



export const initialState: Todo[] = [];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(initialState,
    on(createTodo, (state, { texto }) => [...state, new Todo( texto ) ] )

);

// tslint:disable-next-line: typedef
export function todoReducer(state, action) {
    return _todoReducer(state, action);
}
