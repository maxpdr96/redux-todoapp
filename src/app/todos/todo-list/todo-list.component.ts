import { filtrosValidos } from './../../filtro/filtro.actions';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Todo } from './../models/todo.model';
import { AppState } from './../../app.reducer';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroAtual: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos')
    //   .subscribe(todos => this.todos = todos);
    this.store.subscribe( ({ todos, filtro}) => {

      this.todos = todos;
      this.filtroAtual = filtro;

    });
  }

}
