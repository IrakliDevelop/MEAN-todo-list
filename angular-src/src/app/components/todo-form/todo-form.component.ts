import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {GetAllTodosService} from '../../services/get-all-todos.service'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todos:[];
  text:String;

  constructor(private getAllTodos: GetAllTodosService) { }

  //getting all todos
  ngOnInit() {
    this.getAllTodos.fetchData().subscribe(todos =>{
      console.log(todos[0]["text"]);
    })
  }

  //form submit
  onSubmit(){
    console.log(this.text);
  }


}
