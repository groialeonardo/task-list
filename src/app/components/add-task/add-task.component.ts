import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService} from 'src/app/services/ui.service';
import { subscribeOn, Subscription} from 'rxjs';

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

  showAddTask:boolean = false;
  //Subcripcion para recibir el observable generado en el UIService
  Sub?:Subscription

  constructor(private uiService:UiService ) { }

  ngOnInit(): void {

    // Se consume el observable de UIService que indica si se hizo clic en AddTask.
    //Copia el valor en showAddTask para hacer el toggle. En el html se muestra o no el formulario dependiendo del valor de esta ultima
    this.Sub = this.uiService.onToggle().subscribe((t)=>(this.showAddTask=t))

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
