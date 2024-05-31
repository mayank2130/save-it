export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  assignedTo?: string; // employee id
}

export interface Employee {
  id: number;
  name: string;
  email: string;
}

