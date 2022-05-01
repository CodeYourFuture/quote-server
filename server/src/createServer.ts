import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import cors from 'cors';
dotenv.config();
// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
export default function ():express.Application {
  const app:express.Application = express();
  app.use(cors())
  app.use("/", router);
  return app
}
