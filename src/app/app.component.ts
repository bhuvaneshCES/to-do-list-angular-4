import { Component } from '@angular/core';
export class Task {
  title: string;
  description: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dashboard = 'ToDo List';
  tasks: Task[] = [];
  dashboardTasks: Task[] = [];
  newTask = {};
  tempTask = {};
  showList = false;

  onClick(task) {
    this.tempTask = {
      title: task.title,
      description: task.description
    };
    this.showList = !this.showList;
  }
  onAdd(task) {
    this.newTask = task;
    this.tasks.push(task);
    this.dashboardTasks.push(task);
    this.newTask = {};
  }

  onSave(task) {
      this.tasks.forEach((value, index) => {
        this.dashboardTasks.forEach((value1, index1) => {
          if (value === value1) {
            this.tasks.splice(index, 1);
            this.tasks.push(task);
          }
        });
      });
      this.showList = !this.showList;
  }
  onDelete(task) {
    this.tasks.forEach((value, index) => {
      this.dashboardTasks.forEach((value1, index1) => {
        if (value === value1) {
          this.tasks.splice(index, 1);
        }
      });
    });
    this.showList = !this.showList;
}
onCancel() {
  this.showList = !this.showList;
}
}
