const express = require('express');
const quotes = require('./quotes');
const PORT = process.env.PORT || 5000;
const app = express();
app.use('/api/quotes',require('./routes/api/quotes'))

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
