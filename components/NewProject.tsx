"use client";
import React, { useState } from "react";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import DarkMode from "@/components/DarkMode";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Camera } from "lucide-react";

function Home() {
  const [projectDetails, setProjectDetails] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    teamMembers: "",
    taskAssigned: "",
    budget: "",
    resources: "",
    tasks: "",
    deliverables: "",
    priority: "medium",
    status: "planning",
    documents: "",
    references: "",
    category: "",
    tags: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Project Details:", projectDetails);
  };

  return (
    <div className="flex ml-64 flex-col flex-grow">
      <div className="flex flex-row  space-x-10">
        <div className="py-10">
          <div className="bg-gray-400 p-2 rounded-2xl w-60 max-w-sm">
            Search
          </div>
        </div>
        <div className="py-10 space-x-5">
          <Link
            href=""
            className={cn("p-3", badgeVariants({ variant: "secondary" }))}
          >
            Badge
          </Link>
          <Link
            href=""
            className={cn("p-3", badgeVariants({ variant: "secondary" }))}
          >
            Badge
          </Link>
          <Link
            href=""
            className={cn("p-3", badgeVariants({ variant: "secondary" }))}
          >
            Badge
          </Link>
          <Link
            href=""
            className={cn("p-3", badgeVariants({ variant: "secondary" }))}
          >
            Badge
          </Link>
        </div>
        <DarkMode />
      </div>

      <div className="shadow-md pt-10 pl-6 pr-6">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-4 bg-gray-100 dark:bg-gray-800"
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
            <label className=" ">Create Tasks</label>
            <textarea
              name="tasks"
              placeholder="Task List"
              value={projectDetails.tasks}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
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
}

export default Home;
