const drawLanguage = function () {};

const html = `HTML`;
const js = `JAVASCRIPT`;
const react = `REACT`;
const gitHub = `GITHUB`;
const node = `NODE.JS`;

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

document.getElementById("mixedLetters").textContent = shuffleString(js);

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
