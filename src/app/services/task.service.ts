import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl = "http://localhost:5000/tasks";


  constructor(
    private httpClient:HttpClient
  ) { }

  getTasks() :  Observable<Task[]> {

    return this.httpClient.get<Task[]>(this.apiUrl)

    /* const task = of (TASKS) //Para traer desde archivo monk-task
    return  task;*/
  }

  deleteTask(task:Task) : Observable<Task[]> {

   const url = `${this.apiUrl}/${task.id}`;

   return this.httpClient.delete<Task[]>(url)

  }


}
