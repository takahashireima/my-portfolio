const no = document.getElementById("Name");
const hobbyphoto_1 = document.getElementById("hobbyphoto1");
const hobbyphoto_2 = document.getElementById("hobbyphoto2");
const hobbyphoto_3 = document.getElementById("hobbyphoto3");
const background_change_black1 = document.getElementById("black1");
const background_change_black2 = document.getElementById("black2");
const background_change_black3 = document.getElementById("black3");
const background_change_black4 = document.getElementById("black4");
const fontColor_change_red = document.getElementById("red");
const OIP = document.getElementById("OIP");
const film = document.getElementById("film");
const youtube = document.getElementById("youtube");
const genre = document.getElementById("genre");
const channel = document.getElementById("channel");

let flag = false;

no.onclick = function () {
  if (flag == false) {
    no.textContent = "・名前:Takahashi Reima";
  } else {
    no.textContent = "・名前:髙橋怜眞";
  }
  flag = !flag;
};

film.onclick = function () {
  hobbyphoto_2.classList.toggle("change");
  if (hobbyphoto_2.classList.contains("change") == true) {
    hobbyphoto_2.src = "hora-.jpg";
    film.textContent = "ホラー映画！！！！";
    background_change_black1.style.backgroundColor = "black";
    background_change_black2.style.backgroundColor = "black";
    background_change_black3.style.backgroundColor = "black";
    background_change_black4.style.backgroundColor = "black";
    OIP.style.color = "red";
    film.style.color = "red";
    youtube.style.color = "red";
    fontColor_change_red.style.color = "red";
  } else {
    hobbyphoto_2.src = "filmphoto.jpg";
    film.textContent = "好きなジャンルは...";
    background_change_black1.style.backgroundColor = "darkgray";
    background_change_black2.style.backgroundColor = "floralwhite";
    background_change_black3.style.backgroundColor = "floralwhite";
    background_change_black4.style.backgroundColor = "floralwhite";
    OIP.style.color = "black";
    film.style.color = "black";
    youtube.style.color = "black";
    fontColor_change_red.style.color = "black";
  }
};

youtube.onclick = function () {
  hobbyphoto_3.classList.toggle("change");
  if (hobbyphoto_3.classList.contains("change") == true) {
    hobbyphoto_3.src = "nitizyougumi.jpg";
    youtube.textContent = "　　　日常組！！！！";
  } else {
    hobbyphoto_3.src = "youtubephoto.jpg";
    youtube.textContent = "好きなYouTubeチャンネルは...";
  }
};
