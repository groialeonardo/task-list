import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private addTaskflag:boolean = false;
  toggleAddTaskSubject= new Subject<any>();



  constructor() { }

  //este metodo es el que se llama desde el header para cambiar el valor
  toggleAddTask() {

    console.log("toggleAddTask desde service")
    this.addTaskflag = !this.addTaskflag
    this.toggleAddTaskSubject.next(this.addTaskflag)

  }

  //este metodo es el observable que van a mirar los distintos componentes para hacerse del valor del Subject
  onToggle():Observable<any> {

    return this.toggleAddTaskSubject.asObservable();
  }


}
