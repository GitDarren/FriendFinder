var path = require('path');


var buddyArray = require('../data/buddy.js');


module.exports = function (app) {
    //read data from buddy.js
    app.get('/api/buddy', function (req, res) {
        res.json(buddyArray);
    });


    app.post('/api/buddy', function (req, res) {
        console.log(buddyArray);
        console.log(`This shit is working in apiRoutes.js`)
        var diff = [];
        var total = 0;
        var lowestArray = [];
        var best = 0;
        var userScores = req.body.scores;

        //loops through each entry in the array
        for (var i = 0; i < buddyArray.length; i++) {

            //Create variable to determine 
            diff = buddyArray[i].scores.map(function (item, index) {
                return Math.abs(item - userScores[index]);
            })

            console.log(buddyArray[i].scores);

            total = diff.reduce(function (prev, current) {
                return prev + current;
            }, 0);

            lowestArray.push(total);
        };

        for (var j = 0; j < lowestArray.length; j++) {
            if (lowestArray[j] <= lowestArray[best]) {
                best = j;
            }
        }

        res.json(buddyArray[best])

        buddyArray.push(req.body)

    });


}