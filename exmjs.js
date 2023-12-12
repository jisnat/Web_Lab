const questions=[
{
question:"What is the capital of india?",
choices:["paris","London","Delhi","berlin"],
correctAnswer:2
},
{
question:"What is the large ocean in erath?",
choices:["Atlantic Ocean","Indian Ocean ","Arctic Ocean","Pacific Ocean"],
correctAnswer:3
},
{
question:"Which planet is known as the planet?",
choices:["Venus","Jupiter","Mars","Saturn"],
correctAnswer:2
},
{
question:"What is the capital of india?",
choices:["paris","London","Delhi","berlin"],
correctAnswer:2
}
];

const container=document.querySelector(".container");
const questionElement=document.getElementById("question");
const choicesElement=document.getElementById("choices");
const submitElement=document.getElementById("submit-btn");
const scoreElement=document.getElementById("score");
const restartElement=document.getElementById("restart-btn");
const timeElement=document.getElementById("time");

let currentQuestion=0;
let score=0;
let timeLeft=120;

function loadQuestion(){
const question=questions[currentQuestion];
questionElement.textContent=question.question;

choicesElement.innerHTML="";
for(let i=0;i<question.choices.length;i++){
const li=document.createElement("li");
const radio=document.createElement("input");
radio.type="radio";
radio.name="choices";
radio.value=i;
li.appendChild(radio);
li.appendChild(document.createTextNode(question.choices[i]));
choicesElement.appendChild(i);
}
}

function checkAnswer(){
const selectOPtion=document.querySelector("input[name='chice']:checked");
if(selectOption){
const selectedAnswer=parseInt(selectOption.value);
if(selectedAnswer===questions[currentQuestion].correctAnswer){score++;
}
currentQuestion++;
if(currentQuestion<questions.length){
loadQuestion();
}
else{
showScore();
}
}
}

function showScore()
{
clearInterval(timeInterval);
}
let timerInterval=setInterval(updateTimer

