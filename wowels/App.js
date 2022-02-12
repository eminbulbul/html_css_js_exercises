let myText = document.getElementById('string');
let myButton = document.getElementById('cbut');
let mySpan = document.getElementById('dom_result')


let vowels = `aeiou`;
let counter = 0;

myButton.addEventListener('click', () => {
    let text_u = myText.value.toLowerCase();
    for (let index = 0; index < text_u.length; index++) {
        if (vowels.includes(text_u[index])) {
            counter++
        }
    }
    mySpan.innerHTML = "Vowels count is " + counter;
});