import { Project } from "./models/project.model";
import { Employee, EmployeeType } from "./models/employee.model";
import { connectToDb } from "./utils";

export const getProjects = async () => {
  try {
    await connectToDb();
    const products = await Project.find();
    return products;
  } catch (err) {
    console.log(err);
    alert("")
  }
};
export const getEmployees = async () => {
  try {
    await connectToDb();
    const employees = await Employee.find();
    return employees;
  } catch (err) {
    console.log(err);
  }
};
