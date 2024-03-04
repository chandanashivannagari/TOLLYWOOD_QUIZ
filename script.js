const startButton=document.getElementById('start-btn')
const nextButton=document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex
const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-buttons')
let score = 0;
const scoreElement = document.getElementById('score');

startButton.addEventListener('click',startGame)

nextButton.addEventListener('click',()=>{
        currentQuestionIndex++
        setNextQuestion()
})
function startGame()
{
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions=questions.sort(()=>Math.random()-.5)
currentQuestionIndex=0
questionContainerElement.classList.remove('hide')
score = 0; // Reset score
scoreElement.innerText = `Score: ${score}`;
setNextQuestion()
}
function setNextQuestion()
{
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question)
{
        questionElement.innerText=question.question
        question.answers.forEach(answer=>{
                const button=document.createElement('button')
                button.innerText=answer.text
                button.classList.add('btn')
                if(answer.correct){
                        button.dataset.correct=answer.correct
                }
                button.addEventListener('click',selectAnswer)
                answerButtonsElement.appendChild(button)
        })
}
function resetState(){
        clearStatusClass(document.body)
        nextButton.classList.add('hide')
        while (answerButtonsElement.firstChild){
                answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }
}

    
function selectAnswer(e)
{
const selectedButton=e.target;
const correct= selectedButton.dataset.correct;
setStatusClass(document.body,correct)

Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button,button.dataset.correct)
})
if (correct) {
        score++;
        scoreElement.innerText = `Score: ${score}`;
    }
if(shuffledQuestions.length>currentQuestionIndex+1){
        nextButton.classList.remove('hide')
}
else{
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
}

}
function setStatusClass(element,correct){
        clearStatusClass(element)
        if(correct){
                element.classList.add('correct')
        }
        else{
                element.classList.add('wrong')
        }
}
function clearStatusClass(element){
        element.classList.remove('correct')
        element.classList.remove('wrong')

}

    
const questions=[
        {
        
                question: 'Who is the hero in the KGF?',
                answers:[
                        {
                                text:'YASH', correct:true
                        },
                        {
                                text:'PRABAHS', correct:false
                        },
                        {
                                text:'MAHESH BABU', correct:false
                        },
                        {
                                text:'RANA', correct:false
                        }



                ]
                
        },
        {
        
                question: 'Who told Kattapa to kill Bahubali',
                answers:[
                        {
                                text:'Devasena', correct:false
                        },
                        {
                                text:'BallalaDeva', correct:false
                        },
                        {
                                text:'Shivagaami', correct:true
                        },
                        {
                                text:'Bijjaladeva', correct:false
                        }



                ]
                
        },
        {
        
                question: 'Which South Indian movie had gone to the Oscar stage',
                answers:[
                        {
                                text:'Bahubali', correct:false
                        },
                        {
                                text:'RRR', correct:true
                        },
                        {
                                text:'KGF', correct:false
                        },
                        {
                                text:'Pushpa', correct:false
                        }



                ]
                
        },
        {
        
                question: 'What do AA do in Pushpa',
                answers:[
                        {
                                text:'Smuggler', correct:true
                        },
                        {
                                text:'Doctor', correct:false
                        },
                        {
                                text:'Police', correct:false
                        },
                        {
                                text:'Master', correct:false
                        }



                ]
                
        },
        {
        
                question: 'What is Telugu film industry called',
                answers:[
                        {
                                text:'Kollywood', correct:false
                        },
                        {
                                text:'Bollywood', correct:false
                        },
                        {
                                text:'Tollywood', correct:true
                        },
                        {
                                text:'Hollywood', correct:false
                        }



                ]
                
        },
        {
        
                question: 'Who is the Director of Bahubali ',
                answers:[
                        {
                                text:'Niel', correct:false
                        },
                        {
                                text:'Rajamouli', correct:true
                        },
                        {
                                text:'Mani Ratnam', correct:false
                        },
                        {
                                text:'Trivikram', correct:false
                        }



                ]
                
        },
        {
        
                question: 'Who is the Villain in Bahubali',
                answers:[
                        {
                                text:'PRABHAS', correct:false
                        },
                        {
                                text:'RANA', correct:true
                        },
                        {
                                text:'KATTAPA', correct:false
                        },
                        {
                                text:'NTR', correct:false
                        }



                ]
                
        },
        {
        
                question: 'Who is the hero of Dukudu',
                answers:[
                        {
                                text:'Mahesh', correct:true
                        },
                        {
                                text:'PRABAHS', correct:false
                        },
                        {
                                text:'YASH', correct:false
                        },
                        {
                                text:'NTR', correct:false
                        }



                ]
                
        },
        {
        
                question: 'Who is the director of Animal',
                answers:[
                        {
                                text:'Rajamouli', correct:false
                        },
                        {
                                text:'Sandeep', correct:true
                        },
                        {
                                text:'YASH', correct:false
                        },
                        {
                                text:'PRABAHS', correct:false
                        }



                ]
                
        },
        {
        
                question: 'Who is the hero of Hi Nanna',
                answers:[
                        {
                                text:'NANI', correct:true
                        },
                        {
                                text:'PRABAHS', correct:false
                        },
                        {
                                text:'YASH', correct:false
                        },
                        {
                                text:'NTR', correct:false
                        }



                ]
                
        }
        
        
        
        
        ]
        function showScore() {
                questionContainerElement.classList.add('hide');
                scoreElement.innerText = `Your score: ${score} / ${questions.length}`;
            }
