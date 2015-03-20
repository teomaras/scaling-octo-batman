
// list of images to preload
var listOfImages = [
  // 'assets/header2.gif',
  'assets/team/steve.gif',
  'assets/team/chris.gif',
  'assets/team/ivan.gif',
  'assets/team/niksa.gif',
  'assets/team/petar.gif'
  ];

// preload images function
var preloadPictures = function(pictureUrls, callback) {
    var i;
    var length = pictureUrls.length;
    var loaded = 0;

    for (i = 0; i < length; i++) {
        (function (img, src) {
            img.onload = function() {
              console.log(loaded);
                if (++loaded == length && callback) {
                    callback();
                }
            };

            // Use the following callback methods to debug
            // in case of an unexpected behavior.
            img.onerror = function () {};
            img.onabort = function () {};

            img.src = src;
        } (new Image(), pictureUrls[i]));
    }
};

function changeToGif() {
  $('.team-member').each(function(i){
    var img = $(this).css('background-image');
    $(this).css('background-image', img.replace('.jpg', '.gif'));
    // console.log(i);
  });
}

$(window).load(function(){
  $("#preload-wrapper").css("display", "none");
  preloadPictures(listOfImages, changeToGif);
});
