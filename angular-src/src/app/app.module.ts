import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpClientModule } from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
