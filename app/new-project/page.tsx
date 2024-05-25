import OverlayLogin from "@/components/OverlayLogin";
import React from "react";
import NewProject from "@/components/NewProject";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

async function page() {
  const data = await getData();

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Side Navigation */}
      <div className="bg-zinc-900 pt-10 w-56 max-w-xs flex flex-col h-screen items-center justify-between border-black fixed top-0 left-0 bottom-0">
        <div className="pb-5">
          <OverlayLogin />
        </div>
      </div>
      <div className="p-4 flex-grow">
        {/* <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div> */}
        <NewProject data={data} columns={columns} />
      </div>
    </div>
  );
}

export default page;
