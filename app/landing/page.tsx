import React, { useState, useEffect } from "react";
import { getEmployees } from "@/lib/data";
import OverlayLogin from "@/components/OverlayLogin";

const LandingPage = async () => {
  const employees = await getEmployees();

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Side Navigation */}
      <div className="bg-zinc-900 pt-10 w-56 max-w-xs flex flex-col h-screen items-center justify-between border-black fixed top-0 left-0 bottom-0">
        <div className="pb-5">
          <OverlayLogin />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 flex-grow">
        <div className="flex flex-col flex-grow">
          <div className="flex flex-row pl-64 space-x-10">
            <div className="py-10">
              <div className="bg-gray-400 p-2 rounded-2xl w-60 max-w-sm">
                Search
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="pl-64 pr-10 pb-10">
            <div className="rounded-3xl bg-zinc-900 p-1 w-full max-w-full flex h-56 items-center flex-row justify-between border-black">
              <div className="space-y-7">
                <div className="py-20 ml-20">
                  {employees?.map((employee) => (
                    <div
                      key={employee.id}
                      className="flex flex-row items-center space-x-4 text-2xl p-4"
                    >
                      <div className="flex-1">{employee.empName}</div>
                      <div className="flex-1">{employee.assignedTeam}</div>
                      <div className="flex-1">{employee.assignRole}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pl-64 pb-5 ">
            <p>Favourites</p>
          </div>
          <div className="flex flex-row">
            <div className="pl-64">
              <div className="rounded-3xl bg-zinc-900 p-1 w-48 max-w-xs flex h-64 items-center flex-row justify-center border-black">
                <div className="space-y-7">
                  <div className="py-20">
                    <div className="text-2xl">Project management</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-4">
              <div className="rounded-3xl bg-zinc-900 p-1 w-48 max-w-xs flex h-64 items-center flex-row justify-center border-black">
                <div className="space-y-7 ">
                  <div className="py-20 ">
                    <div className="text-2xl">Random dish suggestion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
