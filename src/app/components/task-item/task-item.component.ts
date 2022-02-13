import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task:Task = TASKS[0];
  @Output() onDeleteEvent:EventEmitter<Task> = new EventEmitter();
  @Output() onToogleReminderEvent:EventEmitter<Task>= new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task) {
    this.onDeleteEvent.emit(task);

  }
  onToggle(task:Task) {
    this.onToogleReminderEvent.emit(task);

  }
}
