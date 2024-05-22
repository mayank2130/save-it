import React from 'react'
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import DarkMode from "@/components/DarkMode";
import Link from "next/link";

function Home() {
  return (
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
                <div className="text-2xl">Card List 3</div>
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
  )
}

export default Home