'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Noodles = new Module('noodles');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Noodles.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Noodles.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Noodles.menus.add({
        title: 'noodles example page',
        link: 'noodles example page',
        roles: ['authenticated'],
        menu: 'main'
    });


    // add filter
    // Noodles.aggregateAsset('js', 'noodleFilters.js');

    // add dependency
    // Noodles.angularDependencies('noodleFilters');

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Noodles.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Noodles.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Noodles.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return Noodles;
});

