import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoute from './routes/auth.js';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('____________Connected to mongoDB.____________');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('___________mongoDB disconnected!____________');
});

//middleware
app.use('/', authRoute);

app.listen(8800, () => {
  connect();
  console.log('____________Connected to backend.____________');
});
