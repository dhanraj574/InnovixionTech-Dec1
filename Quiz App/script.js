const questions=[
    {
        question:"Which is largest animal in the world?",
        answers:[
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            { text: "Vantican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Sri Lanka", correct: false},
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: true},
            { text: "Antarctica", correct: false},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    }
];


const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0  ;
let score = 0 ;



function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();
 } 



 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.textContent= questionNo + ". " + currentQuestion.question;
    
    

  currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add("button")
        answerElement.appendChild(button)
        if(answer.correct){
             button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectedAnswer)
   });


} 


function resetState(){
    nextButton.style.display="none"
    while(answerElement.firstChild ) {
        answerElement.removeChild(answerElement.firstChild)
    }

}

function selectedAnswer(event){
     let selectedBtn = event.target ;
     let isCorrect = selectedBtn.dataset.correct === "true"
     if (isCorrect){
        selectedBtn.classList.add("correct")
        score += 1
     }
     else {
        selectedBtn.classList.add("incorrect")
     }
     for (let button of answerElement.children){
        if (button.dataset.correct === "true"){
            button.classList.add("correct")

        }
        button.disabled = "true"
     }
     nextButton.style.display="block"
}

function showScore (){
    resetState();
    questionElement.textContent=`You scored ${score} out of ${questions.length}!`;
    nextButton.textContent="Play Again"
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex ++;
     if(currentQuestionIndex < questions.length){
        showQuestion();
     }
     else {
        showScore();
}   
}



nextButton.addEventListener("click",function(){
    
    if(currentQuestionIndex < questions.length){
         handleNextButton()   ;   
    }
    else {
        startQuiz()
    }
})
 startQuiz();

 
 

