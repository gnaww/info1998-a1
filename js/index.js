let questionIndex = 0;
let questionMaxIndex = 3;
let questionIdArray = ['name', 'major', 'year', 'forward'];

function slideLeft() {
    console.log(questionIdArray[questionIndex])
    let currentQuestion = document.getElementById(questionIdArray[questionIndex]);
    currentQuestion.className += " hidden";
    currentQuestion.classList.remove("slideLeft");
    currentQuestion.classList.remove("slideRight");
    currentQuestion.classList.remove("shown");

    questionIndex--;
    if (questionIndex < 0) {
        questionIndex = questionMaxIndex;
    }

    console.log(questionIdArray[questionIndex])
    let nextQuestion = document.getElementById(questionIdArray[questionIndex]);
    nextQuestion.classList.remove("hidden");
    nextQuestion.className += " shown slideLeft";
}

function slideRight() {
    console.log(questionIdArray[questionIndex])
    let currentQuestion = document.getElementById(questionIdArray[questionIndex]);
    currentQuestion.className += " hidden";
    currentQuestion.classList.remove("slideLeft");
    currentQuestion.classList.remove("slideRight");
    currentQuestion.classList.remove("shown");

    questionIndex++;
    if (questionIndex > questionMaxIndex) {
        questionIndex = 0;
    }

    console.log(questionIdArray[questionIndex])
    let nextQuestion = document.getElementById(questionIdArray[questionIndex]);
    nextQuestion.classList.remove("hidden");
    nextQuestion.className += " shown slideRight";
}

function main() {
    promptUser(showIceCream)
}

function promptUser(cb) {
    let seconds = prompt("How many seconds should ice cream be delayed?");
    cb(seconds);
}

function showIceCream(seconds) {
    window.setTimeout(addIceCream, seconds * 1000);
}

function addIceCream() {
    console.log('hi')
    document.getElementById('container').innerHTML += 
    `<div id="ice" class="question hidden">
        <h1>What's my favorite ice cream?</h1>
        <p>My favorite ice cream flavor is Cookies N' Cream.</p>
     </div>`;
    document.getElementById('navigation').innerHTML +=
    "<li class='shadow'><a href='#ice' id='iceNav'>Ice Cream</a></li>";
    questionMaxIndex = 4;
    questionIdArray.push('ice');
}

document.addEventListener("DOMContentLoaded", main);