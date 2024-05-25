"use client";
import React, { useState } from "react";
import Overlay from "./LoginOverlay/OverLay";
import { useRouter } from "next/navigation";

function OverlayLogin() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };
  const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row">
        {/* Side Navigation */}
        <div className="bg-zinc-900 pt-10 w-56 max-w-xs flex flex-col h-screen items-center justify-between border-black fixed top-0 left-0 bottom-0">
          <div className="space-y-7 flex flex-col justify-center items-center">
            <div className="pb-20">
              <div className="text-2xl text-white">List</div>
            </div>
            <div className="pl-7 space-y-6 flex flex-col">
              <button className="p-3 text-left text-white" onClick={() => router.push("/landing")} >
                Home
              </button>
              <button className="p-3 text-left text-white" onClick={() => router.push("/new-project")} >
                New Project
              </button>
              <button className="p-3 text-left text-white" onClick={() => router.push("/create-teams")} >
                Create Teams
              </button>
              <button className="p-3 text-left text-white" onClick={() => router.push("/add-employees")} >
                Add Employees 
              </button>
            </div>
          </div>
          <div className="pb-5">
            <button
              className="p-3 rounded-2xl pl-8 pr-8 dark:bg-indigo-900 bg-black "
              onClick={toggleOverlay}
            >
              Sign in
            </button>
            <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} />
          </div>
        </div>
  
    </div>
  );
}

export default OverlayLogin;
