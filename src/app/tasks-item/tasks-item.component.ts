import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent {
  @Input() content: string = ''; 
  @Input() completed: boolean = false;

  @Output() toggleEvent = new EventEmitter();
  @Output() contentChange = new EventEmitter<string>();

  toggle() {
    this.toggleEvent.emit();
  }

  submitChanges() {
    this.contentChange.emit(this.content);
  }
}
