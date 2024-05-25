"use client";
import React, { useState, useEffect } from "react";
import { fetchTasks, fetchEmployees, assignTask } from "./api";
import TaskList from "./TaskList";
import EmployeeList from "./EmployeeList";
import { Task, Employee } from "./interface";

const AssignTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      const tasks = await fetchTasks();
      const employees = await fetchEmployees();
      setTasks(tasks);
      setEmployees(employees);
    }
    loadData();
  }, []);

  const handleAssign = (taskId: string) => {
    setSelectedTaskId(taskId);
  };

  const handleSelectEmployee = async (employeeId: string) => {
    if (selectedTaskId) {
      const response = await assignTask(selectedTaskId, employeeId);
      if (response.ok) {
        // Find the task and employee names
        const assignedTask = tasks.find((task) => task.id === selectedTaskId);
        const assignedEmployee = employees.find(
          (employee) => employee.id === employeeId
        );

        // Set a detailed message using the task title and employee name
        setMessage(
          `Task "${assignedTask?.title}" assigned to ${assignedEmployee?.name} successfully!`
        );
        setTasks(await fetchTasks());
      } else {
        setMessage("Failed to assign task.");
      }
      setSelectedTaskId(null);
    }
  };

  return (
    <div>
      {message && <div className="alert">{message}</div>}
      <TaskList tasks={tasks} onAssign={handleAssign} />
      {selectedTaskId && (
        <EmployeeList employees={employees} onSelect={handleSelectEmployee} />
      )}
    </div>
  );
};

export default AssignTasks;
