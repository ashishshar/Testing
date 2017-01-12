(function ()
{
    'use strict';

    angular
        .module('app.auth.forms', [])
        .config(config);

    /** @ngInject */
    

    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        $stateProvider.state('app.auth_forms', {
            url      : '/auth/forms',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.auth_forms': {
                    templateUrl: 'app/main/auth/forms/forms.html',
                    controller : 'FormsController as vm'
                }
            },
            bodyClass: 'forms'
        });
    }

})();