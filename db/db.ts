import { setServers } from "node:dns";
import mongoose from "mongoose";

setServers(["8.8.8.8", "1.1.1.1"])

interface ConnectionStatus {
  isConnected?: number | boolean;
}

const connection: ConnectionStatus = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    connection.isConnected = db.connections[0].readyState;
    return db
  } catch (error) {
    throw new Error(error as string);
  }
};


