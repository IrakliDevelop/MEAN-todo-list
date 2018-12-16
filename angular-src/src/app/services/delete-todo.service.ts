import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DeleteTodoService {

  todo:any;

  constructor(
    private http: HttpClient
  ) { }

    deleteTodo(id):any{
      const headers = new  HttpHeaders({
        'Content-Type':'application/json',
      });
      const options ={
        headers:headers,
        body: {_id: id}
      }

      return this.http.delete("http://localhost:3000/todos/", options).pipe(map(res=>{res}));
      
      }
    


  }
