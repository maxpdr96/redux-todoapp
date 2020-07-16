import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
    '[TODO] Create Todo',
    props<{ texto: string }>()

);

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()

);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto: string }>()
);

export const apagar = createAction(
    '[TODO] Apagar Todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] ToggleAll Todo',
    props<{ completado: boolean }>()

);
export const limparTodos = createAction(
    '[TODO] limpar Todo'
);
