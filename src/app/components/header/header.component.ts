import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = "My Task List";
  subcription?:Subscription;
  showAddTask:boolean = false;

  constructor(private uiService:UiService) {
   }

  ngOnInit(): void {
    // Se consume el observable de UIService que indica si se hizo clic en AddTask.
    //Copia el valor en showAddTask para hacer el toggle. Aca se utiliza para cambiar texto y color del boton
    this.subcription = this.uiService.onToggle().subscribe((t)=>(this.showAddTask=t))
  }

  //Metodo que se llama desde el header.component.html cuando se detecta el evento emitido por el componente Button al hacer click
  toggleAddTask() {

    //llama al servicio para que maneje este click
    this.uiService.toggleAddTask()


  }

}
