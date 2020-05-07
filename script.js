
let currentQuestion = 0;
let totalPoints = 0;
let nAnswers = 4;
let questions = [
    {
        text: "Inside which HTML element do we put the JavaScript?",
        answers: [
            "<script>", "<js>", "<javascript>", "<scripting>"
        ],
        points: 5,
        correct: 0
    },
    {
        text: "Where is the correct place to insert a JavaScript?",
        answers: [
            "Both the <head> section and the <body> section are correct", "The <head> section", "The <body> section", "None of the above"
        ],
        points: 5,
        correct: 0
    },
    {
        text: "What is the correct syntax for referring to an external script called \"abc.js\"?",
        answers: [
            "<script href=\"abc.js\">", "<script src=\"abc.js\">", "<script name=\"abc.js\">", "None of the above"
        ],
        points: 5,
        correct: 1
    }
];


function setTotalPoints() {
    totalPoints = 0;
    for (i = 0; i < questions.length; i++) {
        totalPoints += questions[i].points;
    }
}

function hideWelcomeRegion() {
    const welcomeRegion = document.getElementById("welcomeRegion"); 
        if (welcomeRegion !== null) {
        welcomeRegion.style.display = "none";
    }
}



function displayQuestion(){
    question = questions[currentQuestion];
    if (question) {
        const qt = document.getElementById("questionText");{
            qt.innerText = question.text;
        }
        for (i = 0; i < nAnswers; i++) {
            let answer = document.getElementById("answer" + (i + 1));{
                answer.innerText = question.answers[i];
            }
        }
    }

}

function displayTotalPoints() {
    const qt = document.getElementById("pointsDisplay");{
        qt.innerText = totalPoints;
    }
}


function submitQuestion(){
    if (currentQuestion < questions.length){
        for (i = 0; i < nAnswers; i++){
            let answer = document.getElementById("radio" + (i+1));
            if (answer && answer.checked && i !== questions[currentQuestion].correct){
                totalPoints -= questions[currentQuestion].points;
                displayTotalPoints();
            }
        }
        currentQuestion++;
        displayQuestion();
    }


}



function attachClickHandlers(){
    const lc = document.getElementById("submitQuestion"); {
        lc.addEventListener("click", submitQuestion);
    }
}

function showQuestionRegion() {
    const form = document.getElementById("questionRegion");{
        form.style.display = "block";
    }
}


function onStartButtonPressed() {
    hideWelcomeRegion();
    showQuestionRegion();
    attachClickHandlers();
    displayQuestion();
    displayTotalPoints();
};



function onWindowLoad(){
    const startButton = document.getElementById("startButton");
    if (startButton !== null){
    addEventListener("click", onStartButtonPressed);
    setTotalPoints();
}
};

window.addEventListener("load", onWindowLoad);