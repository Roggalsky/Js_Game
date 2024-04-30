const stoper = document.querySelector("#timer");
let counter = 60;
let interval = setInterval(count, 1000);
function count() {
  counter--;
  if (counter === 0) {
    clearInterval(interval);
    counter = 60;
    interval = setInterval(count, 1000);
  }
  stoper.textContent = counter;
}

const langArray = [`GITHUB`, `NODE.JS`, `REACT`, `JAVASCRIPT`, `HTML`];
const drawLanguage = function (array) {
  for (let i = 0; i < array.length; i++) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }
};
const chosenLnag = drawLanguage(langArray);

const shuffleString = function (string) {
  const stringToArray = string.split("");
  //   Fisher-Yates algorithm
  for (let i = stringToArray.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    // wynik przez destrukturyzację
    [stringToArray[i], stringToArray[random]] = [
      stringToArray[random],
      stringToArray[i],
    ];
  }
  return String(stringToArray).replaceAll(",", " ");
};

document.getElementById("mixedLetters").textContent = shuffleString(chosenLnag);

const checkButton = document.querySelector(".confirm");
const win = document.querySelector("#winLabel");
const lose = document.querySelector("#loseLabel");
let countWin = 0;
let countLose = 0;
checkButton.addEventListener("click", () => {
  if (textPlace.value === "") {
    return;
  } else if (textPlace.value.toUpperCase() === chosenLnag) {
    countWin++;
    win.textContent = countWin;
  } else if (textPlace.value.toUpperCase() != chosenLnag) {
    countLose++;
    lose.textContent = countLose;
  }
});
console.log(textPlace.value);
console.log(textPlace.value.toUpperCase());
