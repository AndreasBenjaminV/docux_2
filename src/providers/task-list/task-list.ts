import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TaskListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskListProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TaskListProvider Provider');
  }
  obtenerdatos(){
    return this.http.get('http://localhost:8100/assets/json/task_detail.json');
}

}
