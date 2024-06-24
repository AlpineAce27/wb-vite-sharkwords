import './style.css'
import getRandomWord from './src/randomWord.js'
import setSharkImage from './src/sharkImage.js'
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word.js'
import setupGuesses from './src/guess.js'

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`


const initSharkwords = () => {
  let numWrong = 0
  const word = getRandomWord()
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`)
  setSharkImage(document.querySelector('#shark-img'), numWrong)
  setupWord(document.querySelector('#word-container'), word)
  //console.log(isLetterInWord(word[0]))
  //console.log(isLetterInWord('1'))
  //revealLetterInWord(word[0])

  const handleGuess = (guessEvent, letter) => {
    // Disable button after click
    const button = guessEvent.target
    button.setAttribute('disabled', true)
    // Handle correct/incorrect guess
    if (isLetterInWord(letter)) {
      revealLetterInWord(letter)
    } else {
      numWrong += 1
      setSharkImage(document.querySelector('#shark-img'), numWrong)
    }
  }
  setupGuesses(document.querySelector('#letter-buttons'), handleGuess)
}
initSharkwords()