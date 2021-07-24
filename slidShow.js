let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://raw.githubusercontent.com/iliketaiaki/SlidShow/main/pic/S__288423938.jpg",
"https://raw.githubusercontent.com/iliketaiaki/SlidShow/main/pic/S__288423940.jpg"
"https://raw.githubusercontent.com/iliketaiaki/SlidShow/main/pic/S__300384262.jpg"
"https://raw.githubusercontent.com/iliketaiaki/SlidShow/main/pic/S__300384263.jpg"
"https://raw.githubusercontent.com/iliketaiaki/SlidShow/main/pic/S__300384264.jpg"
"hhttps://raw.githubusercontent.com/iliketaiaki/SlidShow/main/pic/S__300384265.jpg"
"https://raw.githubusercontent.com/iliketaiaki/SlidShow/main/pic/%E9%A6%AC%E3%81%AB%E9%A3%9F%E3%82%8F%E3%82%8C%E3%82%8BS__339156994.jpg",
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
