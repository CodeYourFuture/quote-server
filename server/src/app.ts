import express from 'express';
import createServer from "./createServer";

const app:express.Application = createServer();

//Start our server so that it listens for HTTP requests!
app.listen(process.env.PORT, function () {
    console.log(`App is running on http://localhost:${process.env.PORT}`);
});