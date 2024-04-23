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

const deleteBTN = document.querySelector(".backspace");
let chars = [];
const buttons = document.querySelectorAll(".btn");
const textPlace = document.querySelector(".typeYourAnswer");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    textPlace.value += btn.innerText;
    chars = textPlace.value.split("");
  });
});
deleteBTN.addEventListener("click", () => {
  chars.pop();
  textPlace.value = chars.join("");
});

const checkButton = document.querySelector(".confirm");
checkButton.addEventListener("click", () => {
  if (textPlace.value === chosenLnag) {
    console.log(`działam`);
  }
});
//  Fisher-Yates algorithm
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }

//   na początku chciałem uzyć
//   const futureIndex = Math.floor(Math.random() * stringToArray.length) + 1;
