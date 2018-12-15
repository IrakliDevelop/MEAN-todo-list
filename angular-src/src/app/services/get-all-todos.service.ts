import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetAllTodosService {

  constructor(private http: HttpClient) { }

  fetchData():any{
    let headers = new  HttpHeaders({
      'Content-Type':'application/json',
      'Accept': 'application/json'
    });
    return this.http.get('http://localhost:3000/todos',{headers:headers}).pipe(
      map((res: Response) => {
        console.log(res);
        return res;
      })
    );
  }
}
