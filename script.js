
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



function displayQuestion(){
    question = questions[currentQuestion];

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
    const startButton = document.getElementByIs("startButton");
    if (startButton !== null) {
        addEventListener("click", onStartButtonPressed);
        setTotalPoints();
    } else {
        window.alert("Application has failed to load.")
    }

}


window.addEventListener("load", onWindowLoad);