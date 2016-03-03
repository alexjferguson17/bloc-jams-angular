(function() {
    function Fixtures() {
        var Fixtures = {};

        var albumPicasso = {
            name: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            albumArtUrl: 'assets/album_covers/01.png',
            songs: [
                { name: 'Blue', length: 280, audioUrl: 'assets/music/blue' },
                { name: 'Green', length: 194, audioUrl: 'assets/music/green' },
                { name: 'Red', length: 301, audioUrl: 'assets/music/red' },
                { name: 'Pink', length: 201, audioUrl: 'assets/music/pink' },
                { name: 'Magenta', length: 135, audioUrl: 'assets/music/magenta' }
            ]
        };

        // Another Example Album
        var albumMarconi = {
            name: 'The Telephone',
            artist: 'Guglielmo Marconi',
            label: 'EM',
            year: '1909',
            albumArtUrl: 'assets/album_covers/20.png',
            songs: [
                { name: 'Hello, Operator?', length: '1:01' },
                { name: 'Ring, ring, ring', length: '5:01' },
                { name: 'Fits in your pocket', length: '3:21'},
                { name: 'Can you hear me now?', length: '3:14' },
                { name: 'Wrong phone number', length: '2:15'}
            ]
        };

        Fixtures.getAlbum = function() {
          return albumPicasso;
        };

        Fixtures.getCollection = function(num){
          result = []
          for (var i = 0; i < num ; i++) {
            result.push(angular.copy(albumPicasso));
          }
          return result;
        }

        return Fixtures;
    }

    angular
        .module('blocJams')
        .factory('Fixtures', Fixtures);
})();
