import React from 'react';
import { Employee } from './interface';

interface EmployeeListProps {
  employees: Employee[];
  onSelect: (employeeId: string) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onSelect }) => {
  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id} onClick={() => onSelect(employee.id)}>
            {employee.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
