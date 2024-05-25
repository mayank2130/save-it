"use client";

import React, { useState } from "react";

export const AddEmployees = () => {
  const [projectDetails, setProjectDetails] = useState({
    empName: "",
    assignedTeam: "",
    assignRole: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(JSON.stringify(projectDetails));
      const response = await fetch("/api/home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectDetails),
      });
      if (!response.ok) {
        alert("Failed to create store");
      } else {
        // Handle successful response
        console.log("Store created successfully");
      }
    } catch (error: any) {
      console.error("Error creating store:", error.message);
    }
  };

  return (
    <div className="flex ml-64 flex-col flex-grow">
      <div className="flex flex-row  space-x-10">
        <div className="text-2xl">Add a new journey partner!</div>
      </div>

      <div className="shadow-md pt-10 pl-6 pr-6">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
        >
          <div className="flex flex-col gap-2 flex-1">
            <label className=" ">Enter employee name</label>
            <input
              id="empName"
              type="text"
              name="empName"
              placeholder="Enter employee name"
              value={projectDetails.empName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          <div className="flex flex-row gap-5 flex-1">
            <div className="flex flex-col gap-2 flex-1">
              <label className="">Assign to a Team</label>
              <input
                id="assignedTeam"
                type="text"
                name="assignedTeam"
                placeholder="Add Team Members"
                value={projectDetails.assignedTeam}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="">Assign Roles</label>
              <input
                id="assignRole"
                type="text"
                name="assignRole"
                placeholder="Assign Roles"
                value={projectDetails.assignRole}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Get'em on board
          </button>
        </form>
      </div>
    </div>
  );
};
