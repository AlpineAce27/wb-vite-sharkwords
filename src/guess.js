const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//create a function to setup the letter buttons for guessing
function setupGuesses(element, handleGuess) {
 //go through the alphabet, split it to each letter, and for each letter...
  alphabet.split('').forEach((letter) => {
    //create a button element for each letter
    const btn = document.createElement('button');
    //add the letter in question as text inside the button
    btn.innerText = letter;
    //add an event listener
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    //when it is clicked, it runs a function called "handleGuess" that appends the button to an element
    element.append(btn);
  });
}

export default setupGuesses;
