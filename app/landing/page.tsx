"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Overlay from "@/components/LoginOverlay/OverLay";
import Home from "@/components/Home";
import NewProject from "@/components/NewProject";
import PopularProjects from "@/components/PopularProjects";

function Page() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const [showHome, setShowHome] = useState(false);
  const [showNewProject, setShowNewProject] = useState(false);
  const [showPopularProject, setShowPopularProject] = useState(false);

  const handlePopularProjects = () => {
    setShowPopularProject(true);
    setShowNewProject(false);
  };

  const handleNewProject = () => {
    setShowNewProject(true);
    setShowHome(false);
    setShowPopularProject(false);
  };

  const handleHomeClick = () => {
    setShowHome(true);
    setShowNewProject(false);
    setShowPopularProject(false);
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
          {" "}
          <button onClick={toggleOverlay}>Sign in</button>
          <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} />
        </div>
      </div>

      {/* Scroll List and search bar */}
      {showHome && <Home />}
      {showNewProject && <NewProject />}
      {showPopularProject && !showNewProject && <PopularProjects />}
    </div>
  );
}

export default Page;
