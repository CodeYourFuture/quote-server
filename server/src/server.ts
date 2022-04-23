import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import cors from 'cors';
dotenv.config();
// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const app = express();
app.use(cors())
app.use("/", router);

//Start our server so that it listens for HTTP requests!
app.listen(process.env.PORT, function () {
  console.log(`App is running on http://localhost:${process.env.PORT}`);
});
