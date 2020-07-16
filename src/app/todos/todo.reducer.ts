import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { createTodo, toggle, editar, apagar, toggleAll, limparTodos } from './todo.actions';



export const initialState: Todo[] = [];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(initialState,
    on(createTodo, (state, { texto }) => [...state, new Todo(texto)]),

    on(apagar, (state, { id }) => state.filter(todo => todo.id !== id)),

    on(limparTodos, state => state.filter(todo => !todo.completado)),

    on(toggleAll, (state, { completado }) => state.map(todo => {
        return {
            ...todo,
            // tslint:disable-next-line: object-literal-shorthand
            completado: completado
        };
    })),

    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                };
            } else {
                return todo;
            }

        });
    }),
    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    // tslint:disable-next-line: object-literal-shorthand
                    texto: texto
                };
            } else {
                return todo;
            }

        });
    })
);

// tslint:disable-next-line: typedef
export function todoReducer(state, action) {
    return _todoReducer(state, action);
}
