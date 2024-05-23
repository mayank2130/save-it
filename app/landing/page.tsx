"use client";
import React, { useState, useEffect } from "react";
import Overlay from "@/components/LoginOverlay/OverLay";
import Home from "@/components/Home";
import NewProject from "@/components/NewProject";
import PopularProjects from "@/components/PopularProjects";

function Page() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [activeComponent, setActiveComponent] = useState("home");

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const handleHomeClick = () => {
    setActiveComponent("home");
  };

  const handleNewProject = () => {
    setActiveComponent("newProject");
  };

  const handlePopularProjects = () => {
    setActiveComponent("popularProjects");
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Side Navigation */}
      <div className="bg-zinc-900 pt-10 w-56 max-w-xs flex flex-col h-screen items-center justify-between border-black fixed top-0 left-0 bottom-0">
        <div className="space-y-7 flex flex-col justify-center items-center">
          <div className="pb-20">
            <div className="text-2xl">List</div>
          </div>
          <div className="pl-7 space-y-6 flex flex-col">
            <button className="p-3 text-left" onClick={handleHomeClick}>
              Home
            </button>
            <button className="p-3 text-left" onClick={handleNewProject}>
              New Project
            </button>
            <button className="p-3 text-left" onClick={handlePopularProjects}>
              Popular Projects
            </button>
          </div>
        </div>
        <div className="pb-5">
          <button onClick={toggleOverlay}>Sign in</button>
          <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} />
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-56 p-4 flex-grow">
        {activeComponent === "home" && <Home />}
        {activeComponent === "newProject" && <NewProject />}
        {activeComponent === "popularProjects" && <PopularProjects />}
      </div>
    </div>
  );
}

export default Page;
