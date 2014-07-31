/**
 * Created by xuejiaowang on 22/07/2014.
 */

    'use strict';

var mongoose = require('mongoose'),
    Noodle = mongoose.model('Noodle'),
    _ = require('lodash');

/**
 * find noodle
 */

exports.noodle = function (req, res, next, id) {
    Noodle.load(id, function (err, noodle) {
        if (err) return next(err);
        if (!noodle) return next(new Error('Fail to load noodle' + id));
        res.noodle = noodle;
        next();
    });
};

/**
 *  create noodle
 */

exports.create = function (req, res) {
    var noodle = new Noodle(req.body);
    noodle.save(function (err) {
        if (err) {
            return res.json(500, {
                error: 'can not create noodle'
            });
        }
        res.json(noodle);
    });
};


/**
 * update noodel
 */


exports.update = function (req, res) {
    var noodle = res.noodle;
    noodle = _.extend(noodle, res.body);
    noodle.save(function (err) {
        if (err) {
            return res.json(500, {
                error: 'can not update noodle'
            });
        }

        res.json(noodle);
    });
};


/**
 * List of noodles
 */

exports.all = function (req, res) {
    Noodle.find().sort('title').exec(function (err, noodles) {
        if (err) {
            return res.json(500, {
                error: 'can not load noodles'
            });
        }
        res.json(noodles);
    });
};

