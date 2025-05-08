import express from 'express';
import mongoose from 'mongoose';

// Configuration (no .env)
const PORT = 5000;
const MONGO_URI = 'mongodb://localhost:27017/crud_db';

import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('Connection error:', err);
  }
};

start();
