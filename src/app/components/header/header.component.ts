import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = "My Task List";
  subcription?:Subscription;
  showAddTask:boolean = false;

  constructor(
    private uiService:UiService,
    private router:Router
    ) {
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

  //Obtiene un string desde el html para compararlo con la ruta actual. Si coincide con el string devuelve true.
  //Se usa para esconder el boton cuando se sale de task component.
  hasRoute(route:string){
    return this.router.url === route;
  }

}
