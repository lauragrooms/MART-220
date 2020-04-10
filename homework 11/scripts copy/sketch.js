let vid;

function setup() {
  noCanvas();

  vid = createVideo(
    ['assets/test.mov'],
    vidLoad
  );

  vid.size(100, 100);
}

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}