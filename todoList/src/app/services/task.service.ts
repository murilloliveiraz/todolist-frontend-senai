import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateTaskResponse } from 'src/models/taskResponse';
import { CreateTaskRequest } from 'src/models/task';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly apiUrl = `${environment.endPoint}/tasks`;

  constructor(private http: HttpClient) {}

  createTask(task: CreateTaskRequest): Observable<CreateTaskResponse> {
    return this.http.post<CreateTaskResponse>(this.apiUrl, task);
  }


  deleteTask(task: CreateTaskResponse): Observable<void> {
    return this.http.delete<void>(this.apiUrl, {
      body: task,
    });
  }

  getTasks(): Observable<CreateTaskResponse[]> {
    return this.http.get<CreateTaskResponse[]>(this.apiUrl);
  }


  getTaskById(id: number): Observable<CreateTaskResponse> {
    return this.http.get<CreateTaskResponse>(`${this.apiUrl}/${id}`);
  }


  updateTask(id: number, task: CreateTaskResponse): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, task);
  }
}
