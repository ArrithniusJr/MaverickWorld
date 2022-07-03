$(function() {
  $(".lyrics").fadeOut();
  //Play button on Click
  $(".play-track1").on("click", function() {
    var audio1 = $("#track1");
    $(audio1)[0].play();
    $(".c1").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14").removeClass("cycle-spin");
    //lyrics
    $(".song-jireh").fadeIn();
    $(".null, .song-bre, .song-champion, .song-graves, .song-miracles, .song-basement, .song-wait, .song-alltogether, .song-mighty, .song-goback, .song-itrain, .song-doitagain, .song-refiner, .song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track2").on("click", function() {
    var audio2 = $("#track2");
    $(audio2)[0].play();
    $(".c2").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c1, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14").removeClass("cycle-spin");
    //lyrics
    $(".song-bre").fadeIn();
    $(".null, .song-jireh, .song-champion, .song-graves, .song-miracles, .song-basement, .song-wait, .song-alltogether, .song-mighty, .song-goback, .song-itrain, .song-doitagain, .song-refiner, .song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track3").on("click", function() {
    var audio3 = $("#track3");
    $(audio3)[0].play();
    $(".c3").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c1, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14").removeClass("cycle-spin");
    //lyrics
    $(".song-champion").fadeIn();
    $(".null, .song-bre, .song-jireh, .song-graves, .song-miracles, .song-basement, .song-wait, .song-alltogether, .song-mighty, .song-goback, .song-itrain, .song-doitagain, .song-refiner, .song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track4").on("click", function() {
    var audio4 = $("#track4");
    $(audio4)[0].play();
    $(".c4").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c3, .c1, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14").removeClass("cycle-spin");
    //lyrics
    $(".song-graves").fadeIn();
    $(".null, .song-bre, .song-champion, .song-jireh, .song-miracles, .song-basement, .song-wait, .song-alltogether, .song-mighty, .song-goback, .song-itrain, .song-doitagain, .song-refiner, .song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track5").on("click", function() {
    var audio5 = $("#track5");
    $(audio5)[0].play();
    $(".c5").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c3, .c4, .c1, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14").removeClass("cycle-spin");
    //lyrics
    $(".song-miracles").fadeIn();
    $(".null, .song-bre, .song-champion, .song-graves, .song-jireh, .song-basement, .song-wait, .song-alltogether, .song-mighty, .song-goback, .song-itrain, .song-doitagain, .song-refiner, .song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track6").on("click", function() {
    var audio6 = $("#track6");
    $(audio6)[0].play();
    $(".c6").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c3, .c4, .c5, .c1, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14").removeClass("cycle-spin");
    //lyrics
    $(".song-basement").fadeIn();
    $(".null, .song-bre, .song-champion, .song-graves, .song-miracles, .song-jireh, .song-wait, .song-alltogether, .song-mighty, .song-goback, .song-itrain, .song-doitagain, .song-refiner, .song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track7").on("click", function() {
    var audio7 = $("#track7");
    $(audio7)[0].play();
    $(".c7").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c3, .c4, .c5, .c6, .c1, .c8, .c9, .c10, .c11, .c12, .c13, .c14").removeClass("cycle-spin");
    //lyrics
    $(".song-wait").fadeIn();
    $(".null, .song-bre, .song-champion, .song-graves, .song-miracles, .song-basement, .song-jireh, .song-alltogether, .song-mighty, .song-goback, .song-itrain, .song-doitagain, .song-refiner, .song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track8").on("click", function() {
    var audio8 = $("#track8");
    $(audio8)[0].play();
    $(".c8").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c3, .c4, .c5, .c6, .c7, .c1, .c9, .c10, .c11, .c12, .c13,.c14").removeClass("cycle-spin");
    //lyrics
    $(".song-alltogether").fadeIn();
    $(".null, .song-bre, .song-champion, .song-graves, .song-miracles, .song-basement, .song-wait, .song-jireh, .song-mighty, .song-goback, .song-itrain, .song-doitagain, .song-refiner, .song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track9").on("click", function() {
    var audio9 = $("#track9");
    $(audio9)[0].play();
    $(".c9").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c3, .c4, .c5, .c6, .c7, .c8, .c1, .c10, .c11, .c12, .c13, .c14").removeClass("cycle-spin");
    //lyrics
    $(".song-mighty").fadeIn();
    $(".null, .song-bre, .song-champion, .song-graves, .song-miracles, .song-basement, .song-wait, .song-alltogether, .song-jireh, .song-goback, .song-itrain, .song-doitagain, .song-refiner, .song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track10").on("click", function() {
    var audio10 = $("#track10");
    $(audio10)[0].play();
    $(".c10").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c1, .c11, .c12, .c13, .c14").removeClass("cycle-spin");
    //lyrics
    $(".song-goback").fadeIn();
    $(".null, .song-bre, .song-champion, .song-graves, .song-miracles, .song-basement, .song-wait, .song-alltogether, .song-mighty, .song-jireh, .song-itrain, .song-doitagain, .song-refiner, .song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track11").on("click", function() {
    var audio11 = $("#track11");
    $(audio11)[0].play();
    $(".c11").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c1, .c12, .c13, .c14").removeClass("cycle-spin");
    //lyrics
    $(".song-itrain").fadeIn();
    $(".null, .song-bre, .song-champion, .song-graves, .song-miracles, .song-basement, .song-wait, .song-alltogether, .song-mighty, .song-goback, .song-jireh, .song-doitagain, .song-refiner, .song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track12").on("click", function() {
    var audio12 = $("#track12");
    $(audio12)[0].play();
    $(".c12").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c1, .c13, .c14").removeClass("cycle-spin");
    //lyrics
    $(".song-doitagain").fadeIn();
    $(".null, .song-bre, .song-champion, .song-graves, .song-miracles, .song-basement, .song-wait, .song-alltogether, .song-mighty, .song-goback, .song-itrain, .song-jireh, .song-refiner, .song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track13").on("click", function() {
    var audio13 = $("#track13");
    $(audio13)[0].play();
    $(".c13").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c1, .c12, .c14").removeClass("cycle-spin");
    //lyrics
    $(".song-refiner").fadeIn();
    $(".null, .song-bre, .song-champion, .song-graves, .song-miracles, .song-basement, .song-wait, .song-alltogether, .song-mighty, .song-goback, .song-jireh, .song-doitagain, song-nonelike").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".play-track14").on("click", function() {
    var audio14 = $("#track14");
    $(audio14)[0].play();
    $(".c14").addClass("cycle-spin");
    //stop other playing tracks...
    $(".c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c1, .c12, c13").removeClass("cycle-spin");
    //lyrics
    $(".song-nonelike").fadeIn();
    $(".null, .song-bre, .song-champion, .song-graves, .song-miracles, .song-basement, .song-wait, .song-alltogether, .song-mighty, .song-goback, .song-jireh, .song-doitagain, .song-refiner").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
  });

  //Pause all tracks, Same time && Spinning
  $(".pause, .previous, .next").on("click", function() {
    //if previous/next change image & pause..
    $(".play").fadeIn();
    $(".pause").hide();
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
    $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14").removeClass("cycle-spin");
  });
  //Pause-track Button on click
  $(".pause-track1").on("click", function() {
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track2").on("click", function() {
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track3").on("click", function() {
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track4").on("click", function() {
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track5").on("click", function() {
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track6").on("click", function() {
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track7").on("click", function() {
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track8").on("click", function() {
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track9").on("click", function() {
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio7 = $("#track7");
    $(audio7)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track10").on("click", function() {
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track11").on("click", function() {
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track12").on("click", function() {
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track13").on("click", function() {
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
  $(".pause-track14").on("click", function() {
    var audio13 = $("#track14");
    $(audio14)[0].pause();
    //Lyrics
    $(".null").fadeIn();
    $(".lyrics").fadeOut();
    //Pause this tracks when selected is playing..
    var audio1 = $("#track1");
    $(audio1)[0].pause();
    var audio2 = $("#track2");
    $(audio2)[0].pause();
    var audio3 = $("#track3");
    $(audio3)[0].pause();
    var audio4 = $("#track4");
    $(audio4)[0].pause();
    var audio5 = $("#track5");
    $(audio5)[0].pause();
    var audio6 = $("#track6");
    $(audio6)[0].pause();
    var audio8 = $("#track8");
    $(audio8)[0].pause();
    var audio9 = $("#track9");
    $(audio9)[0].pause();
    var audio10 = $("#track10");
    $(audio10)[0].pause();
    var audio11 = $("#track11");
    $(audio11)[0].pause();
    var audio12 = $("#track12");
    $(audio12)[0].pause();
    var audio13 = $("#track13");
    $(audio13)[0].pause();
    var audio14 = $("#track14");
    $(audio14)[0].pause();
  });
});

//For Track Searching..
function search_song() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();

    let x = document.getElementsByClassName('song-title');
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.display="flex";
        let horizontal = document.getElementById('last-horiline');
        horizontal.style.display = "block";
      }
    }
}

//for showing links
$(function() {
  $("#blackimg").hide();
  $(".shownav").on("click", function() {
    $(".linkcont").css("display", "flex!important").fadeIn();
    $(".hidenav").fadeIn();
    $(".shownav").hide();
  });
  $(".hidenav").on("click", function() {
    $(".linkcont").css("display", "none").fadeOut();
    $(".shownav").fadeIn();
    $(".hidenav").hide();
  });
});

//for hiding and showing like/Love/Heart button ++ Play and pause button
$(function() {
  //for like
  $("#greylove").on("click", function() {
    $("#redlove").fadeIn();
    $("#greylove").hide();
  });
  $("#redlove").on("click", function() {
    $("#greylove").fadeIn();
    $("#redlove").hide();
  });

  //for play & pauseimage
  $("#pauseimage").hide(); //hides the pausebutton
  $("#pauseimage").on("click", function() {
    $("#playimage").fadeIn();
    $("#pauseimage").hide();
  });
  $("#playimage").on("click", function() {
    $("#pauseimage").fadeIn();
    $("#playimage").hide();
  });

  //Theme mode..
  $("#dark").hide(); //light hidden by default.
  //lightmoder on click
  $("#light").on("click", function(){
    //index page...
    $("#dark").fadeIn().css("filter", "invert(0%)");
    $(".shownav, .hidenav").css("filter", "invert(0%)");
    $(".thehead, .thefooter").css("background-color", "rgb(255, 255, 255)");
    $(".mav-text, .active, .link-text, .link-text:hover").css("color", "#000");
    $("#blackimg").fadeIn();
    $("#lightimg").hide();
    $(".controlimg").css({"filter":"invert(100%)", "border-color":"#000"});
    $("#playimage, #pauseimage").css("filter", "invert(90%)");
    $(".cont-for-thm").css("background-color", "rgb(255, 255, 255, .1)");
    $(".med-container-4-lnks").addClass("only-med");/*
    $(".only-med").css("background-color", "rgba(255, 255, 255, .89)!important");*/
    //playlist page.play
  });
  //darkmoder on click
  $("#dark").on("click", function(){
    //index page, dark on click bring the light
    $("#dark").hide();
    $("#light").fadeIn();
    $("#light").fadeIn().css("filter", "invert(1)");
    $(".shownav, .hidenav").css("filter", "invert(1)");
    $(".thehead, .thefooter").css("background-color", "rgb(0, 15, 32)");
    $(".mav-text, .active, .link-text, .link-text:hover").css("color", "#fff");
    $("#lightimg").fadeIn();
    $("#blackimg").hide();
    $(".controlimg").css("filter", "invert(95%)");
    $("#playimage, #pauseimage").css("filter", "invert(40%)");
    $(".cont-for-thm").css("background-color", "rgb(0, 15, 32, .8)");
    $(".med-container-4-lnks").removeClass("only-med");
  });
});
