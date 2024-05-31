"use client";
import React, { useState, useEffect } from "react";
import { fetchTasks, fetchEmployees, assignTask, createTask } from "./api";
import TaskList from "./TaskList";
import EmployeeList from "./EmployeeList";
import { Task, Employee } from "./interface";

export const AssignTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskDescription, setNewTaskDescription] = useState<string>("");

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
        const assignedTask = tasks.find((task) => task.id === selectedTaskId);
        const assignedEmployee = employees.find(
          (employee) => employee.id === employeeId
        );
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

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      title: newTaskTitle,
      description: newTaskDescription,
    };
    await createTask(newTask);
    setTasks(await fetchTasks());
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  return (
    <div>
      {message && <div className="alert">{message}</div>}
      <form onSubmit={handleAddTask} className="mb-4">
        <input
          type="text"
          placeholder="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2"
        />
        <div className="flex justify-end">
          <button type="submit" className="p-3 bg-blue-600 text-white">
            Add Task
          </button>
        </div>
      </form>
      <TaskList tasks={tasks} onAssign={handleAssign} />
      {selectedTaskId && (
        <EmployeeList employees={employees} onSelect={handleSelectEmployee} />
      )}
    </div>
  );
};
