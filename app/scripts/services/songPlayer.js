(function() {
  function SongPlayer($rootScope, Fixtures) {
   var SongPlayer = {};
   var currentAlbum = Fixtures.getAlbum();

   var getSongIndex = function(song) {
     return currentAlbum.songs.indexOf(song);
   };

   SongPlayer.volume = 80;
   SongPlayer.currentSong = null;
   var currentBuzzObject = null;


   SongPlayer.setCurrentTime = function(time) {
    if (currentBuzzObject) {
     currentBuzzObject.setTime(time);
     }
   };

   var setSong = function(song) {
     if (currentBuzzObject) {
       currentBuzzObject.stop();
       SongPlayer.currentSong.playing = null;
     }

     currentBuzzObject = new buzz.sound(song.audioUrl, {
       formats: ['mp3'],
       preload: true
     });

     currentBuzzObject.bind('timeupdate', function() {
        $rootScope.$apply(function() {
         SongPlayer.currentTime = currentBuzzObject.getTime();
       });
      });

     SongPlayer.currentSong = song;
   };

  var playSong = function(song){
    currentBuzzObject.play();
    song.playing = true;
  }

  var stopSong = function(){
    currentBuzzObject.stop();
    SongPlayer.currentSong.playing = null;
  }

  SongPlayer.play = function(song) {

    song = song || SongPlayer.currentSong;
    if (SongPlayer.currentSong !== song) {
      setSong(song);
      playSong(song);

    } else if (SongPlayer.currentSong === song) {
      if (currentBuzzObject.isPaused()) {
        currentBuzzObject.play();
      }
    }
  };

  SongPlayer.pause = function(song) {
    song = song || SongPlayer.currentSong;
    currentBuzzObject.pause();
    song.playing = false;
  };

  SongPlayer.previous = function() {
   var currentSongIndex = getSongIndex(SongPlayer.currentSong);
   currentSongIndex--;

   if (currentSongIndex < 0) {
    stopSong();
  } else {
   var song = currentAlbum.songs[currentSongIndex];
   setSong(song);
   playSong(song);
  }
};

  SongPlayer.setVolume = function(volume) {
    if (currentBuzzObject) {
      console.log(volume)

      currentBuzzObject.setVolume(volume);
    }
    SongPlayer.volume = volume;
  };

    return SongPlayer;


  SongPlayer.next = function() {
   var currentSongIndex = getSongIndex(SongPlayer.currentSong);
   currentSongIndex++;

   if (currentSongIndex > currentAlbum.songs.length) {
    stopSong();
  } else {
     var song = currentAlbum.songs[currentSongIndex];
     setSong(song);
     playSong(song);
    }
  };

    return SongPlayer;
  }
angular
.module('blocJams')
.factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();
