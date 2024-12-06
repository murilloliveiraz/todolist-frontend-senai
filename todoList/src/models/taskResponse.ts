import { CreateTaskRequest } from './task';

export class CreateTaskResponse extends CreateTaskRequest {
  id: number;
  data: Date;
  status: string;
}
