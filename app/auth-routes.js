/**
 * Created by jackie on 6/6/16.
 */

var User = require('./models/user');
var mongoose = require('mongoose');

module.exports = function(app) {

    // server routes ===========================================================
    app.get('/api', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });
    })



    // check credentials



    // authentication



    // frontend routes =========================================================
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });

};
