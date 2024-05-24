"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function LoginHeader() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <div
        className={`pl-10 pr-10 py-4 flex flex-row items-center justify-between z-10 ${
          isDarkMode ? "text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex flex-row gap-20 items-center">
          <Button onClick={toggleDarkMode} variant="outline">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default LoginHeader;
