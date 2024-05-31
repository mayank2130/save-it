"use client";
import React, { useEffect, useState } from "react";
import { Payment, columns } from "@/app/new-project/columns";
import { Employee } from "./testing/interface";
import {
  fetchTasks,
  fetchEmployees,
  assignTask,
  createTask,
} from "@/components/testing/api";

// interfaces/Task.ts
export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const defaultTasks: Task[] = [
  {
    id: 1,
    title: "Default Task 1",
    description: "default description",
    completed: false,
  },
  {
    id: 2,
    title: "Default Task 2",
    description: "default description",
    completed: true,
  },
];

interface NewProjectProps {
  data: Payment[];
  columns: any[];
}

const NewProject: React.FC<NewProjectProps> = ({ data, columns }) => {
  let alltask: Task[] = [
    { id: 1, title: "Task 1", description: "Description 1", completed: true },
    { id: 2, title: "Task 2", description: "Description 2", completed: true },
    // Add more tasks as needed
  ];

  let allemployees: Employee[] = [
    { id: 1, name: "Joe Smith", email: "joe@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    // Add more employees as needed
  ];

  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskDescription, setNewTaskDescription] = useState<string>("");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedTaskIds, setSelectedTaskIds] = useState<Set<number>>(
    new Set()
  );
  const [message, setMessage] = useState<string | null>(null);
  useEffect(() => {
    setEmployees(allemployees);
  }, []);

  const [projectDetails, setProjectDetails] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    teamMembers: "",
    taskAssigned: "",
    budget: "",
    resources: "",
    tasks: defaultTasks,
    deliverables: "",
    priority: "medium",
    status: "planning",
    documents: "",
    references: "",
    category: "",
    tags: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: projectDetails.tasks.length + 1,
        title: newTaskTitle,
        description: newTaskDescription,
        completed: false,
      };
      setProjectDetails((prevDetails) => ({
        ...prevDetails,
        tasks: [...prevDetails.tasks, newTask],
      }));
      setNewTaskTitle("");
      setNewTaskDescription("");
    }
  };

  const removeTask = (taskId: number) => {
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      tasks: prevDetails.tasks.filter((task) => task.id !== taskId),
    }));
  };

  const handleAssign = (taskId: number) => {
    const newSelectedTaskIds = new Set(selectedTaskIds);
    if (newSelectedTaskIds.has(taskId)) {
      newSelectedTaskIds.delete(taskId);
    } else {
      newSelectedTaskIds.add(taskId);
    }
    setSelectedTaskIds(newSelectedTaskIds);
  };

  const handleSelectEmployee = async (employeeId: number, taskId: number) => {
    const response = await assignTask(taskId, employeeId);
    if (response.ok) {
      const assignedTask = projectDetails.tasks.find((task) => task.id === taskId);
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
  };

  const toggleTaskCompletion = (taskId: number) => {
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      tasks: prevDetails.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Project Details:", projectDetails);
  };

  return (
    <div className="flex ml-64 flex-col flex-grow">
      <div className="flex flex-row  space-x-10">
        <div className="">
          <div className="text-2xl">Start a new project</div>
        </div>
      </div>
      <div className="shadow-md pt-10 pl-6 pr-6">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={projectDetails.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={projectDetails.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <div className="flex flex-row gap-5 flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <label className=" ">Start Date</label>
              <input
                type="date"
                name="startDate"
                placeholder="Start Date"
                value={projectDetails.startDate}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className=" ">Expected finish date</label>
              <input
                type="date"
                name="endDate"
                placeholder="End Date"
                value={projectDetails.endDate}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <label>Create Tasks</label>
              {message && <div className="alert">{message}</div>}
              <ul>
                {projectDetails.tasks.map((task) => (
                  <li key={task.id}>
                    <div className="flex flex-1 flex-row items-center">
                      <input
                        type="checkbox"
                        checked={selectedTaskIds.has(task.id)}
                        className="size-4 m-2"
                        onChange={() => handleAssign(task.id)}
                      />
                      <p className="mr-1 pointer-events-none">{task.title}</p>
                      <p className="ml-10 pointer-events-none">
                        Description: {task.description}
                      </p>
                      <div className="pl-2">
                        <button
                          className="p-2 bg-blue-700 rounded-sm"
                          onClick={() => handleAssign(task.id)}
                        >
                          Assign
                        </button>
                      </div>
                    </div>
                    {selectedTaskIds.has(task.id) && (
                      <div className="flex flex-col">
                        <h2 className="mb-2">Employees</h2>
                        <select
                          className="border rounded-md p-2"
                          onChange={(e) =>
                            handleSelectEmployee(
                              parseInt(e.target.value),
                              task.id
                            )
                          }
                        >
                          <option value="">Select Employee</option>
                          {employees.map((employee) => (
                            <option key={employee.id} value={employee.id}>
                              {employee.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                    <button
                      type="button"
                      className="p-2 bg-red-600 rounded-lg mb-4 m-2"
                      onClick={() => removeTask(task.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex flex-1 flex-row  gap-4">
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="New task title"
                  className="p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
                <input
                  type="text"
                  placeholder="Task Description"
                  value={newTaskDescription}
                  onChange={(e) => setNewTaskDescription(e.target.value)}
                  className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="p-3 bg-blue-600 rounded-lg m-4"
                  type="button"
                  onClick={() => addTask()}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <label className="">Create Team</label>
              <input
                type="text"
                name="teamMembers"
                placeholder="Assign Team Members"
                value={projectDetails.teamMembers}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="">Assign Task</label>
              <input
                type="text"
                name="taskAssigned"
                placeholder="Assign Task"
                value={projectDetails.taskAssigned}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
          </div>

          <div className="gap-2 flex flex-col">
            <label className="">Expected Budget</label>
            <input
              type="number"
              name="budget"
              placeholder="Total Budget"
              value={projectDetails.budget}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>
          <div className="flex flex-row gap-5 flex-1">
            <div className="flex flex-1 flex-col gap-2">
              <label className="">Set Priority</label>
              <select
                name="priority"
                value={projectDetails.priority}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label className="">Current Status</label>
              <select
                name="status"
                value={projectDetails.status}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              >
                <option value="planning">Planning</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-5 flex-1">
            <div className="flex flex-1 flex-col gap-2">
              <label className="">Internal Resources</label>
              <textarea
                name="documents"
                placeholder="Add links of internal resource for reference"
                value={projectDetails.documents}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label className="">External Resources</label>
              <textarea
                name="references"
                placeholder="Add links of external resource for reference"
                value={projectDetails.references}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
          </div>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={projectDetails.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags"
            value={projectDetails.tags}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProject;
