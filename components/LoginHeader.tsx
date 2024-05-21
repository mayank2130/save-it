"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import DarkMode from "./DarkMode";
import { useRouter } from "next/navigation";

function LoginHeader() {
  const router = useRouter();
  return (
    <>
      <div className="pl-10 flex flex-row items-center justify-between">
        <div>LoginHeader</div>
        <div className=" flex flex-row gap-20 items-center">
          <Button onClick={() => router.push("/landing")} variant="outline">
            Get Started
          </Button>
          <DarkMode />
        </div>
      </div>
    </>
  );
}

export default LoginHeader;
