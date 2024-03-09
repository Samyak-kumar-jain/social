import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/authroute.js';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? 'https://social-8bnm.vercel.app' : '*',
  })
);


dotenv.config();

try {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () => console.log('App listening on port 5000'));
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}

app.use('/auth', router);
