let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://github.com/iliketaiaki/SlidShow/blob/main/S__288423938.jpg",
"https://github.com/iliketaiaki/SlidShow/blob/main/S__288423940.jpg"
"https://github.com/iliketaiaki/SlidShow/blob/main/S__288423941.jpg"
"https://github.com/iliketaiaki/SlidShow/blob/main/S__300384262.jpg"
"https://github.com/iliketaiaki/SlidShow/blob/main/S__300384263.jpg"
"https://github.com/iliketaiaki/SlidShow/blob/main/S__300384264.jpg"
"https://github.com/iliketaiaki/SlidShow/blob/main/S__300384265.jpg",
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
