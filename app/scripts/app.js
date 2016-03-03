 (function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
             .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
                templateUrl: 'templates/landing.html'
            })
            .state('album', {
                url: '/album',
                controller: 'AlbumCtrl as food',
                templateUrl: 'templates/album.html'
            })
            .state('collection', {
                url:'/collection',
                controller: 'CollectionCtrl as collection',
                templateUrl: 'templates/collection.html'
            });
     }


     angular
         .module('blocJams', ['ui.router'])
         .config(config);
 })();


angular.module('blocJams').filter('secondsToTimeString', function() {
  return function(seconds) {
    if(seconds == undefined){return "0:00"}

    minutes = Math.floor(seconds/60);

    seconds = seconds % 60;

    result = minutes + ":" + ("0" + seconds).slice(-2);
    return result;
}
});
