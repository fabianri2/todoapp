import { Component, OnInit } from '@angular/core';

interface Task {
  done: boolean,
  title: string
}

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  title = 'Mis tareas 2';

  tasks: Array<Task> = [];

  inputTask = 'Nueva Tarea';

  editing: boolean=false;

  constructor() { 
  
  }

  ngOnInit(): void {
    // this.tasks.push("Mi primera tarea", "Mi segunda tarea", "Mi tercera tarea");
  }

  addTask() {
    this.tasks.push({ title: this.inputTask, done: false});
  }

  deleteTask(tasks: Task) {
    const index: number = this.tasks.indexOf(tasks);
    if(index !== -1){
      this.tasks.splice(index, 1);
    }
    console.log('Eliminando ${task}')
  
}
}
