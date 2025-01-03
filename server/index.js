// server/index.js
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import memberRoutes from './routes/members.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',  // Allow requests only from the frontend
}));

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/members', memberRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
