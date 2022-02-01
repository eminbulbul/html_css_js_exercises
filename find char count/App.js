let sentence = "If you fall asleep now, you will dream. If you study now, you will live your dream";
let userQue = prompt("Sentece is: " + sentence + " |||  Type something for find how many in the text: ");
let counter = 0;
for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) == (userQue)) {
        counter++
    };
}

console.log(`The ${counter} times '${userQue}' in sentences`);