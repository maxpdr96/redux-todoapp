import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

import * as actions from './../../filtro/filtro.actions';
import { limparTodos } from './../todo.actions';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['todos', 'completados', 'pendentes'];
  pendentes = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.select('filtro').subscribe(filtro => {
    //   this.filtroActual = filtro;
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendentes = state.todos.filter(todo => !todo.completado).length;
    });

  }

  // tslint:disable-next-line: typedef
  trocarFiltro(filtro: actions.filtrosValidos) {
    this.store.dispatch(actions.setFiltro({ filtro }));

  }

  // tslint:disable-next-line: typedef
  limparCompletados(){
    this.store.dispatch(limparTodos());
  }

}
