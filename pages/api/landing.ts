import { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "@/lib/utils";
import { Employee, EmployeeType } from "@/lib/models/employee.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      await connectToDb();
      const formData: EmployeeType = req.body;
      const newEmployee = new Employee(formData);
      await newEmployee.save();
      res.status(201).json({ message: "Employee created successfully", formData });
    } catch (error) {
      console.error("Error creating employee:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
