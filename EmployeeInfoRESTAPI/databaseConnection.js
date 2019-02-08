const dbConnection = require('mongoose');

dbConnection.connect('mongodb://localhost:27017/MagureSoftwares', { useNewUrlParser: true }, (error) => {

    if (!error) {
        console.log('Connected to the Mongo Database Successfully....');
    }
    else {
        console.log('Sorry !! Cannot Connected to the Database !! Try Again !!  ' + JSON.stringify(error, undefined, 2));
    }
});

module.exports = dbConnection;