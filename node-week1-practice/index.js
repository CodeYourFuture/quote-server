const express = require('express');
const app = express();
const path = require('path');

const logger = require('./middleware/logger');
const port = process.env.port || 5000;
app.use(logger);
app.use('/api/members',require('./routes/api/members'))

app.listen(port, () => console.log(`server started on port ${port}`));
//create a member
