let questionIndex = 0;
let questionMaxIndex = 3;
let questionIdArray = ['name', 'major', 'year', 'forward'];

document.addEventListener("DOMContentLoaded", main);
document.onkeydown = checkKey;

function checkKey(event) {
    if (event.keyCode == '37') {
        // left arrow
        slide('left');
    }
    else if (event.keyCode == '39') {
        // right arrow
        slide('right');
    }
}
function goTo(question) {
    if (question === 'name') {
        if (questionIndex !== 0) {
            hideCurrentQuestion();
            let goToQuestion = document.getElementById('name');
            goToQuestion.classList.remove("hidden");
            goToQuestion.className += " shown slideLeft";
            questionIndex = 0;
        }
    }
    else if (question === 'major') {
        if (questionIndex !== 1) {
            hideCurrentQuestion();

            let goToQuestion = document.getElementById('major');
            goToQuestion.classList.remove("hidden");
            
            if (questionIndex < 1) {
                goToQuestion.className += " shown slideRight";
            }
            else {
                goToQuestion.className += " shown slideLeft";
            }

            questionIndex = 1;
        }
    }
    else if (question === 'year') {
        if (questionIndex !== 2) {
            hideCurrentQuestion();
            let goToQuestion = document.getElementById('year');
            goToQuestion.classList.remove("hidden");
            
            if (questionIndex < 2) {
                goToQuestion.className += " shown slideRight";
            }
            else {
                goToQuestion.className += " shown slideLeft";
            }

            questionIndex = 2;
        }
    }
    else if (question === 'forward') {
        if (questionIndex !== 3) {
            hideCurrentQuestion();
            let goToQuestion = document.getElementById('forward');
            goToQuestion.classList.remove("hidden");
            
            if (questionIndex < 3) {
                goToQuestion.className += " shown slideRight";
            }
            else {
                goToQuestion.className += " shown slideLeft";
            }

            questionIndex = 3;
        }
    }
    else if (question === 'ice') {
        if (questionIndex !== 4) {
            hideCurrentQuestion();
            let goToQuestion = document.getElementById('ice');
            goToQuestion.classList.remove("hidden");

            if (questionIndex < 4) {
                goToQuestion.className += " shown slideRight";
            }
            else {
                goToQuestion.className += " shown slideLeft";
            }

            questionIndex = 4;
        }
    }
}

function slide(direction) {
    hideCurrentQuestion();

    if (direction === 'left') {
        questionIndex--;
        if (questionIndex < 0) {
            questionIndex = questionMaxIndex;
        }
    }
    else if (direction === 'right') {
        questionIndex++;
        if (questionIndex > questionMaxIndex) {
            questionIndex = 0;
        }
    }

    let nextQuestion = document.getElementById(questionIdArray[questionIndex]);
    nextQuestion.classList.remove("hidden");

    if (direction === 'left') {
        nextQuestion.className += " shown slideLeft";
    }
    else if (direction === 'right') {
        nextQuestion.className += " shown slideRight";
    }
}

function hideCurrentQuestion() {
    let question = document.getElementById(questionIdArray[questionIndex]);
    question.className += " hidden";
    question.classList.remove("slideLeft");
    question.classList.remove("slideRight");
    question.classList.remove("shown");
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
    document.getElementById('container').innerHTML += 
    `<div id="ice" class="question hidden">
        <h1>What's my favorite ice cream?</h1>
        <p>My favorite ice cream flavor is Cookies N' Cream.</p>
     </div>`;
    document.getElementById('navigation').innerHTML +=
    "<li class='shadow'><a onclick=\"goTo('ice')\">Ice Cream</a></li>";
    questionMaxIndex = 4;
    questionIdArray.push('ice');
}
