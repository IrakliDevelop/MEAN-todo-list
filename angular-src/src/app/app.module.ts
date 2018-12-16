import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpClientModule } from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

import {GetAllTodosService} from './services/get-all-todos.service'
import {AddNewTodoService} from './services/add-new-todo.service'

const appRoutes: Routes = [
  {path:'', component:TodoFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [GetAllTodosService,AddNewTodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
