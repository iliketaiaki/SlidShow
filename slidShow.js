let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://www.waseda.jp/top/assets/uploads/2014/03/hidemaro-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/maejima-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/hatoyama-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/takada-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/amano-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/hiranuma-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/shiozawa-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/shigenobu-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/nobutune-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/shiozawa-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/tanaka-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/nakano-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/shimada-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/ohama-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/abe-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/tokigoyama-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/murai-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/shimizu-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/nishihara-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/koyama-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/okujima-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2014/03/shirai-360x270.jpg",
"https://www.waseda.jp/top/assets/uploads/2018/12/kamata.jpg"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  ここに資料にあるコードを入力しましょう！
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  ここに資料にあるコードを入力しましょう！
}

let timer;
let nowPlaying = false;

function autoPlay() {
  ここに資料にあるコードを入力しましょう！
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
  ここに資料にあるコードを入力しましょう！
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
