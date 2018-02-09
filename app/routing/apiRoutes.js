var path = require('path');

module.exports = function (app) {
    app.post('/save', function(req, res) {
        console.log("this is working", req.body);
        res.send("Hello");
    });

    


}