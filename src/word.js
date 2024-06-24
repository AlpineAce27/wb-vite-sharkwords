let word;

function setupWord(element, initWord) {
    word = initWord

    word.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend',  `<div class="letter-box"></div>`)
    })
}

function isLetterInWord(letter) {
    if(word.includes(letter)){
        return true
    }
    else{
        return false
    }
}

function revealLetterInWord(letter) {
    const letterBoxes = document.querySelectorAll('.letter-box');
    word.split('').forEach((wordLetter, idx) => {
      if (wordLetter === letter) {
        letterBoxes[idx].innerHTML = letter;
      }
    });
}

export{setupWord, isLetterInWord, revealLetterInWord}
