let testText = prompt("Please say something: ")

function reverser(testText) {
    testText = testText.split(" ").reverse();
    return testText.join(" ");
}
console.log(reverser(testText));