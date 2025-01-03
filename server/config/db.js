// server/config/db.js
import mongoose from 'mongoose';
import { MONGODB_URI } from './constants.js';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
