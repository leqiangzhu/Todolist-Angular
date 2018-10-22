import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'David-Zhu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDay();
  year: number = this.currentTime.getFullYear();
  tasks: Task [] = [
    new Task('Finish weekend Angular homework for Epicodus course',1),
    new Task('Begin brainstorming possible JavaScript group projects',2),
    new Task('Add README file to last few Angular repos on GitHub',3)
  ];
   falg: boolean=false;

   selectedTask: Task = this.tasks[0];
   editTask() {
    alert("Time to edit a task!");
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
