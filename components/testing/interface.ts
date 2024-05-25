export interface Task {
    id: string;
    title: string;
    description: string;
    assignedTo?: string; // employee id
  }
  
  export interface Employee {
    id: string;
    name: string;
    email: string;
  }