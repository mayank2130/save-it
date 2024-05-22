"use client";
import React, { useState } from "react";
import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import DarkMode from "@/components/DarkMode";
import { Button } from "@/components/ui/button";
import Overlay from "@/components/LoginOverlay/OverLay";

function Page() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Side Navigation */}
      <div className="bg-zinc-900 pt-10 w-56 max-w-xs flex flex-col h-screen items-center justify-between border-black fixed top-0 left-0 bottom-0">
        <div className="space-y-7 flex flex-col justify-center items-center">
          <div className="pb-20">
            <div className="text-2xl">List</div>
          </div>
          <Link href="/" className="p-3">
            Home
          </Link>
          <Link href="/cars" className="p-3">
            Car
          </Link>
          <Link href="/girls" className="p-3">
            Girls
          </Link>
        </div>
        <div className="pb-5">
          {" "}
          <button onClick={toggleOverlay}>Sign in</button>
          <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} />
        </div>
      </div>

      {/* Scroll List and search bar */}
      <div className="flex flex-col flex-grow">
        <div className="flex flex-row pl-64 space-x-10">
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

        {/* Card */}
        <div className="pl-64 pr-10 pb-10">
          <div className="rounded-3xl bg-zinc-900 p-1 w-full max-w-full flex h-56 items-center flex-row justify-between border-black">
            <div className="space-y-7">
              <div className="py-20">
                <div className="text-2xl">Card List</div>
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
                  <div className="text-2xl">Card List</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-4">
            <div className="rounded-3xl bg-zinc-900 p-1 w-48 max-w-xs flex h-64 items-center flex-row justify-center border-black">
              <div className="space-y-7 ">
                <div className="py-20 ">
                  <div className="text-2xl">Card List</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
