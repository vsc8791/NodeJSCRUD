const express = require('express');
const bodyParser = require('body-parser');

const { dbConnection } = require('./databaseConnection.js');
const empController = require('./controllers/empController.js');
var api = express();
api.use(bodyParser.json());
const portNumber=9090;
api.listen(portNumber, () => {
    console.log('Server is started at Port Number '+portNumber)
});

api.use('/employees', empController);