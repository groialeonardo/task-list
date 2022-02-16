import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private toggleAddTask:boolean = true;

  constructor() { }


}
