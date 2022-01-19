import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartodolab';

  tasks: Todo[];
  constructor(){
    this.tasks = [
      { task: 'Load the dishwasher', completed: false},
      { task: 'Laundry', completed: true},
      { task: 'Sweep the floor', completed: false},
      { task: 'Homework', completed: true},
      { task: 'Dust the lamps', completed: false},
      { task: 'Feed the pup Oso', completed: true},
      { task: 'Journal entry', completed: false},
      { task: 'Hair wash day', completed: false},
      { task: 'Water the plants', completed: true},
      { task: 'Walk Oso', completed: false}

    ]
  }
  // changeStatus(boolean: completed): string{

  // }

  newtask: string ='';
  addTask(){
    this.tasks.push(
      {task: this.newtask, completed: false}
    );
    this.newtask = '';
  }

  completeTask(tsk: Todo)
  {
      tsk.completed = true;

    // this.tasks.forEach(completed => {
    //   if(!completed){
    //     this.tasks.completed = true;
    //   }
    // });
  }
  removeFromList(){
    
  }
}
