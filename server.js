const express = require('express');
const mongoose = require('mongoose');
const  bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();
const items = require('./routes/api/items');


//Body parser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

app.listen(port, () => console.log(`Server started on port ${port}`));