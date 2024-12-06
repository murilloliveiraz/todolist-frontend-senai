import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { CreateTaskResponse } from 'src/models/taskResponse';

@Component({
  selector: 'app-gerenciar-tarefas',
  templateUrl: './gerenciar-tarefas.component.html',
  styleUrls: ['./gerenciar-tarefas.component.css']
})
export class GerenciarTarefasComponent {
  constructor(public formBuilder: FormBuilder, private taskService: TaskService){}
  tasks: CreateTaskResponse[];

  ngOnInit(): void {
    const tasksObserver = {
      next: (data: CreateTaskResponse[]) => {
        this.tasks = data;
        console.log(data)
      },
      error: (err: any) => {
        alert('Ocorreu um erro');
      }
    };
    this.taskService.getTasks().subscribe(tasksObserver);

  }
}
