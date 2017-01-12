(function ()
{
    'use strict';

    angular
        .module('app.home', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        $stateProvider.state('app.home', {
            url      : '/home',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/home/home.html',
                    controller : 'HomeController as vm'
                }
            },
            resolve  : {
                Timeline    : function (msApi)
                {
                    return msApi.resolve('home.timeline@get');
                },
                About       : function (msApi)
                {
                    return msApi.resolve('home.about@get');
                },
                PhotosVideos: function (msApi)
                {
                    return msApi.resolve('home.photosVideos@get');
                }
            },
            bodyClass: 'home'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/home');

        // Api
        msApiProvider.register('home.timeline', ['app/data/home/timeline.json']);
        msApiProvider.register('home.about', ['app/data/home/about.json']);
        msApiProvider.register('home.photosVideos', ['app/data/home/photos-videos.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('home', {
            title : 'home',
            icon  : 'icon-account',
            state : 'app.home',
            weight: 6
        });
    }

})();