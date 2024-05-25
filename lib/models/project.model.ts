import mongoose, { Document, Schema } from "mongoose";

export type GeoLocation = {
    latitude: number;
    longitude: number;
};
export interface IStore extends Document {
    projectName: string;
    projectDescription: string;
    startDate: string;
    expectedFinishDate: string;
    tasks: string;
    team: string;
    assignedTask: String;
    budget: string;
    priority: string
    category: string[];
    status: string;
    internalResources: string;
    externalResources: string;
    tags: string
    createdAt: Date;
}

const projectSchema = new Schema<IStore>({
    projectName: {
        type: String,
        // required: true,
    },
    projectDescription: {
        type: String,
        // required: true,
    },
    startDate: {
        type: String,
        // required: true,
    },
    tasks: {
        type: String,
        // required: true,
    },
    team: {
        type: String,
        required: false,
    },
    assignedTask: {
        type: String,
        // required: true,
    },
    budget: {
        type: String,
        required: false,
    },
    priority: {
        type: String,
        required: false,
    },
    status: {
        type: String
    },
    category: {
        type: [], // Assuming category is an array of strings
        required: false,
    },
    internalResources: {
        type: String,
        // required: true,
    },
    externalResources: {
        type: String,
        // required: true,
    },
    tags: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export const Project = mongoose.models?.Project || mongoose.model("Project", projectSchema);
