import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {GetAllTodosService} from '../../services/get-all-todos.service'
import {AddNewTodoService} from '../../services/add-new-todo.service'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todos:[];
  text:String;

  constructor(
    private getAllTodos: GetAllTodosService,
    private addTodo: AddNewTodoService
    ) { }

  //getting all todos
  ngOnInit() {
    this.getAllTodos.fetchData().subscribe(todos =>{
      this.todos = todos;
      for (const iterator of todos) {
        console.log(iterator);
      }
    });
  }

  //form submit
  onSubmit(){
    const todo = {
      text:this.text
    }
    this.addTodo.postTodo(todo).subscribe(data =>{
      console.log(data);
    });
    location.reload();
  }


}
