import { Component, OnInit } from '@angular/core';
import { Task, tasks } from '../tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  tasks: Task[] = [];

  ngOnInit() {
    this.tasks = tasks;
  }

  toggleTask(index: number) {
    let task = this.tasks[index];
    task.completed = !task.completed;
    if (task.completed) {
      this.tasks.splice(index, 1);
      this.tasks.push(task);
    }
    else {
      this.tasks.splice(index, 1);
      this.tasks.unshift(task);
    }
  }

  changeContent(index: number, newContent: string) {
    console.log("changing content");
    this.tasks[index].text = newContent;
  }

  addTask() {
    this.tasks.push({
      text: '',
      completed: false
    });
  }
}
