var path = require('path');


//GET HTML Requests

module.exports = function (app) {

    app.get('/survey', function (req, res) {

        res.sendFile(path.join(__dirname + '/../public/survey.html'));

    });

    //Home route
    app.get('/', function (req, res) {

        res.sendFile(path.join(__dirname + '/../public/home.html'));

    });

    //Default route in case someone screws up
    app.get('*', function (req, res) {

        res.sendFile(path.join(__dirname + '/../public/home.html'));

    });



}