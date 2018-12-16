import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AddNewTodoService {

  todo:any;

  constructor(
    private http: HttpClient
  ) { }

  postTodo(todo):any{
    let headers = new  HttpHeaders({
      'Content-Type':'application/json',
    });
    return this.http.post('http://localhost:3000/todos', todo, {headers:headers})
      .pipe(map((res: Response)=>{
        console.log(res);
        return res;
      }
      ));
  }
}
