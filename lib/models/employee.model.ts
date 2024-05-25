import { Document, Schema } from "mongoose";
import * as mongoose from "mongoose";

export interface EmployeeType extends Document {
    empName: string;
    assignedTeam: string;
    assignRole: string;
    createdAt: Date;
}

const employeeSchema = new Schema({
    empName: {
        type: String,
        // required: true,
    },
    assignedTeam: {
        type: String,
        // required: true,
        unique: true,
    },
    assignRole: {
        type: String,
        // required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// const Product = mongoose.model<ProdType>("Product", productSchema);
export const Employee =
    mongoose.models?.Employee || mongoose.model("Employee", employeeSchema);
