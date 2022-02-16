import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() addTaskEvent:EventEmitter<Task> = new EventEmitter()

  text:string ="";
  day:string = "";
  reminder:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.text.length === 0){
      alert("Please add a Task!");
      return
    }

    const {text,day,reminder} = this;

    const newTask = {text,day,reminder};

    console.log(newTask)

    this.addTaskEvent.emit(newTask)


  }

}
