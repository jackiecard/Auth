
module.exports = function(app) {

    app.get('/api', function(req, res) {
            res.json({ message: 'hooray! welcome to our api!' });
    })

    app.post('/api/palindrome', function(req, res) {

        var str = req.body.str;
        var answer = false;

        str = str.toLowerCase().replace(/[^a-z]+/g,"");

        if(str === str.split("").reverse().join("")) {
            res.status(200).jsonp({ message : ' is a palindrome!' });
        }
        else {
            res.status(400).jsonp({ message : ' is not a palindrome!' });
        }

        //res.json({message: answer});


    });

        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html');
        });

    };
