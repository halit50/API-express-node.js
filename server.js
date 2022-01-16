const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var router = require('./routes/Task');

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes

app.use('/tasks', router);

// Listen to this Port
app.listen(3000, function () {
    console.log('Live at Port 3000');
})