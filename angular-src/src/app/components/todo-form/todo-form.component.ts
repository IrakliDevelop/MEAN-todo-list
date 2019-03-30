import {Component, OnInit} from '@angular/core';
import {GetAllTodosService} from '../../services/get-all-todos.service';
import {AddNewTodoService} from '../../services/add-new-todo.service';
import {DeleteTodoService} from '../../services/delete-todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todos: [];
  text: String;
  loading: boolean;

  constructor(
    private getAllTodos: GetAllTodosService,
    private addTodo: AddNewTodoService,
    private deleteTodo: DeleteTodoService
  ) {
  }

  // getting all todos
  ngOnInit() {
    this.loadData();
  }

  // form submit
  onSubmit() {
    const todo = {
      text: this.text,
    };
    this.loading = true;
    this.addTodo.postTodo(todo).subscribe(data => {
      this.getAllTodos.fetchData().subscribe(newData => {
        console.log(newData);
        this.loadData();
        // fake long data loading
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      });
    });
  }

  deleteClick(event) {
    const id = event.target.id;
    this.loading = true;
    this.deleteTodo.deleteTodo(id).subscribe(data => {
      this.getAllTodos.fetchData().subscribe(newData => {
        console.log(newData);
        this.loadData();
        // fake long data loading
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      });
    });
  }

  loadData() {
    this.loading = true;
    this.getAllTodos.fetchData().subscribe(todos => {
      this.todos = todos;
      for (const iterator of todos) {
        console.log(iterator);
      }
      // fake long data loading
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    });
  }

}
