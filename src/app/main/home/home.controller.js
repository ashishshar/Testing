(function ()
{
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController(Timeline, About, PhotosVideos)
    {
        var vm = this;

        // Data
        vm.posts = Timeline.posts;
        vm.activities = Timeline.activities;
        vm.about = About.data;
        vm.photosVideos = PhotosVideos.data;

        // Methods

        //////////
    }

})();
