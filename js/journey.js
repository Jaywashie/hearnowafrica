// HearNow Africa — About page video players
// Click-to-play overlay, and only one video plays at a time.
(function () {
  var cards = document.querySelectorAll('[data-video-card]');

  function pauseOthers(current) {
    cards.forEach(function (card) {
      var v = card.querySelector('video');
      if (v !== current && !v.paused) v.pause();
    });
  }

  cards.forEach(function (card) {
    var video = card.querySelector('video');
    var btn = card.querySelector('.video-play');

    video.controls = false; // native controls appear once playback starts

    btn.addEventListener('click', function () {
      video.controls = true;
      card.classList.add('is-started');
      video.play();
    });

    video.addEventListener('play', function () {
      video.controls = true;
      card.classList.add('is-started');
      pauseOthers(video);
    });

    video.addEventListener('ended', function () {
      card.classList.remove('is-started');
      video.controls = false;
      video.load(); // return to the poster
    });
  });
})();
