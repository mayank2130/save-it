import OverlayLogin from "@/components/OverlayLogin";
import React from "react";
import NewProject from "@/components/NewProject";

function page() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Side Navigation */}
      <div className="bg-zinc-900 pt-10 w-56 max-w-xs flex flex-col h-screen items-center justify-between border-black fixed top-0 left-0 bottom-0">
        <div className="pb-5">
          <OverlayLogin />
        </div>
      </div>
      <div className="p-4 flex-grow">
        <NewProject />
      </div>
    </div>
  );
}

export default page;
