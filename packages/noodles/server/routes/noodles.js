'use strict';

var noodle = require('../controllers/noodle');


// The Package is past automatically as first parameter
module.exports = function (Noodles, app, auth, database) {

    app.route('/noodle').get(noodle.all).post(noodle.create);


    app.get('/noodles/example/anyone', function (req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/noodles/example/auth', auth.requiresLogin, function (req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/noodles/example/admin', auth.requiresAdmin, function (req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/noodles/example/render', function (req, res, next) {
        Noodles.render('index', {
            package: 'noodles'
        }, function (err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
