

import mongoose from "mongoose"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
const MONGODB_URI = "mongodb+srv://mayankthakur1712:Er3wLS3e4PjhDCQm@cluster0.pzas6sc.mongodb.net/";

const connection = {};

export const connectToDb = async () => {
  try {
    // @ts-ignore
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(MONGODB_URI);
    // @ts-ignore
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    // @ts-ignore
    throw new Error(error);
  }
};