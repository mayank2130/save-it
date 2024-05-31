"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function LoginHeader() {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-row items-center">
          <Button onClick={() => router.push("/landing")} variant="outline">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}

export default LoginHeader;
