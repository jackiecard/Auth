/**
 * Created by jackie on 6/6/16.
 */
// app/appRoutes.js

// grab the User model
var User = require('./models/user');
var Credentials = require('./models/credentials');
var mongoose = require('mongoose');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    app.get('/api', function(req, res) {
            res.json({ message: 'hooray! welcome to our api!' });
        })



        // Get All Users
        .get('/api/users', function(req, res) {
            // use mongoose to get all Users in the database
            User.find(function(err, users) {

                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(users); // return all Users in JSON format
            });
        })




        // Get by ID
        .get('/api/users/:id', function(req, res) {
            // use mongoose to get all Users in the database
            User.findById(req.params.id, function(err, user) {

                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(user); // return all Users in JSON format
            });
        })



        // Update
        .put('/api/users/:id', function(req, res){

            User.findById(req.params.id, function(err, user) {

                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                user = req.data;

                user.save(function(err){
                    if(err)
                        res.send(err);

                    res.json({message : 'User updated!'});
                })

            });

        })




        // Delete
        .delete('/api/users/:id', function(req, res) {

            User.remove({_id : req.params.id}, function (err) {
                if (err)
                    res.send(err);

                res.json("User removed!");
            });

        });

    // Post
    app.post('/api/users', function(req, res) {
        var user = new User();      // create a new instance of the User model
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.password;

        // save the User and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json(user);
        });
    });






    // AUTHENTICATION


    // Create User
    app.post('/api/sign', function(req, res) {
        var credentials = new Credentials({
        username : req.body.username,
        password : req.body.password});


        // save user to database
        credentials.save(function(err) {
            if (err) throw err;

            // attempt to authenticate user
            Credentials.getAuthenticated(req.body.username, req.body.password, function(err, user, reason) {
                if (err) throw err;

                // login was successful if we have a user
                if (user) {
                    // handle login success
                    console.log('login success');
                    return;
                }

                // otherwise we can determine why we failed
                var reasons = User.failedLogin;
                switch (reason) {
                    case reasons.NOT_FOUND:
                        console.log("User not found");
                        break;
                    case reasons.PASSWORD_INCORRECT:
                        console.log("Login Failed");
                        // note: these cases are usually treated the same - don't tell
                        // the user *why* the login failed, only that it did
                        break;
                    case reasons.MAX_ATTEMPTS:
                        console.log("Login Failed!");
                        // send email or otherwise notify user that account is
                        // temporarily locked
                        break;
                }
            });

        });
    });




        // Authenticate
        app.post('/api/auth', function(req, res) {
            Credentials.getAuthenticated(req.body.username, req.body.password, function(err, user, reason) {
                if (err) throw err;

                // login was successful if we have a user
                if (user) {
                    // handle login success
                    console.log('login success');
                    return;
                }

                // otherwise we can determine why we failed
                var reasons = User.failedLogin;
                switch (reason) {
                    case reasons.NOT_FOUND:
                        console.log("User not found");
                        break;
                    case reasons.PASSWORD_INCORRECT:
                        console.log("Login Failed");
                        // note: these cases are usually treated the same - don't tell
                        // the user *why* the login failed, only that it did
                        break;
                    case reasons.MAX_ATTEMPTS:
                        console.log("Login Failed!");
                        // send email or otherwise notify user that account is
                        // temporarily locked
                        break;
                }
            });
    });





    // Auth
    /*app.post('/api/authenticate', function(req, res) {
     var credentials = new Credentials();      // create a new instance of the User model
     credentials.username = req.body.username;
     credentials.password = req.body.password;


     Credentials.findOne({
     username: req.body.username
     }, function(err, user) {

     if (err) throw err;

     if (!user) {
     res.json({ success: false, message: 'Authentication failed. User not found.' });
     } else if (user) {

     // check if password matches
     if (user.password != req.body.password) {
     res.json({ success: false, message: 'Authentication failed. Wrong password.' });
     } else {

     // if user is found and password is right
     // create a token
     var token = jwt.sign(user, app.get('superSecret'), {
     expiresInMinutes: 1440 // expires in 24 hours
     });

     // return the information including token as JSON
     res.json({
     success: true,
     message: 'Enjoy your token!',
     token: token
     });
     }

     }
     });
     });*/




    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};
