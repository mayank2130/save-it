// api.ts
import { Task, Employee } from './interface';

let tasks: Task[] = [
  { id: '1', title: 'Task 1', description: 'Description 1' },
  { id: '2', title: 'Task 2', description: 'Description 2' },
  // Add more tasks as needed
];

let employees: Employee[] = [
  { id: '1', name: 'Joe Smith', email: 'joe@example.com' },
  { id: '2', name: 'Jane Doe', email: 'jane@example.com' },
  // Add more employees as needed
];

export async function fetchTasks(): Promise<Task[]> {
  return tasks;
}

export async function fetchEmployees(): Promise<Employee[]> {
  return employees;
}

export async function assignTask(taskId: string, employeeId: string): Promise<{ ok: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { ok: true };
}

export async function createTask(task: Task): Promise<void> {
  tasks.push(task);
}