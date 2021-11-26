import { Component, OnInit,Input } from '@angular/core';
import { Task } from 'src/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {
  @Input()
  task!: Task;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
