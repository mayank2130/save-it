"use client";
import React, { useState } from "react";

export const CreateTeam = () => {
  const [projectDetails, setProjectDetails] = useState({
    name: "",
    teamMembers: "",
    taskAssigned: "",
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
        <div className="text-2xl">Create a new team</div>
      </div>

      <div className="shadow-md pt-10 pl-6 pr-6">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
        >
          <div className="flex flex-col gap-2 flex-1">
            <label className=" ">Enter team name</label>
            <input
              type="text"
              name="name"
              placeholder="Marketing team, Developer team, Social Media team, etc."
              value={projectDetails.name}
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
                placeholder="Add Team Members"
                value={projectDetails.teamMembers}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="">Assign Roles</label>
              <input
                type="text"
                name="taskAssigned"
                placeholder="Assign Roles"
                value={projectDetails.taskAssigned}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Create Team
          </button>
        </form>
      </div>
    </div>
  );
};
