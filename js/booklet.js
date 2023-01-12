
let hpCharacters = []
/*
// https://hp-api.onrender.com/api/characters
*/

class questoinTemplate{
    constructor(questionElement, answerButtonsElement, imageRes){
        this.questionElement = questionElement;
        this.answerButtonsElement = answerButtonsElement;
        this.imageRes = imageRes;
    }
}
const questionArray = []; //Array
let shuffledQuestions;
let currentQuestionIndex = 0;


//Search
const searchBar = document.getElementById('searchBar')

const openModalButtons = document.querySelector('[data-modal-target]')
const closeModalButtons = document.querySelector('[data-close-button]')
const overlay = document.getElementById('overlay')

//housecup
const gryffinbtn = document.querySelector('#gryfbtn')
const puffinbtn = document.querySelector('#pufffbtn')
const serpentnbtn = document.querySelector('#serpbtn')
const ravennbtn = document.querySelector('#ravenbtn')
const sortbtn = document.querySelector('#houseSortedbtn')
const booklet = document.querySelector('#booklet')
const questionHandler = document.getElementById('questionHandler')
const scorespanArray = []
let currentPlayerScore

scorespanArray.push(document.querySelector('#gryffscore'), document.querySelector('#hufflescore')
, document.querySelector('#ravenscore') , document.querySelector('#slythscore'))

openModalButtons.addEventListener('click' , () => {
    const modal = document.querySelector(openModalButtons.dataset.modalTarget)
    openModal(modal)
})

window.onload = function StartModal() {
    const modal = document.querySelector(openModalButtons.dataset.modalTarget) 
    openModal(modal)
    booklet.classList.add('hide')
}




closeModalButtons.addEventListener('click', () => {
        const modal = closeModalButtons.closest('.modalbooklet')
        closeModal(modal)
    })


function openModal(modal) {
    if(modal == null) return;
    
    
    modal.classList.add('active');
    overlay.classList.add('active');

}

function closeModal(modal) {
    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
    
}


const loadCharacters = async() => {
    try {
        const res = await fetch('https://hp-api.onrender.com/api/characters')
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err)
    }   
}

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `<li class = "character">
                <h2> ${character.name}</h2>
                <p> House: ${character.house}</p>
                <img src = "${character.image}"></img>
                </li>
                `;
        }).join();
};
const questions = [
    {
        question : "Qual é o personagem principal?",
         answers: [
            { text: "Harry Potter", correct: true},
            { text: "Cedric Diggory", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Quem é o rival do Harry Potter?",
         answers: [
            { text: "Draco Malfoy", correct: true},
            { text: "Cedric Diggory", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Hufflepuff House.",
         answers: [
            { text: "Draco Malfoy", correct: false},
            { text: "Cedric Diggory", correct: true},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes é filho de pais muggle?",
         answers: [
            { text: "Cho Chang", correct: false},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: true},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Ravenclaw?",
         answers: [
            { text: "Cho Chang", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Quem é o professor de Poções?",
         answers: [
            { text: "Severus Snape", correct: true},
            { text: "Minerva McGonagall", correct: false},
            { text: "Rubeus Hagrid", correct: false},
            { text: "Sirius Black", correct: false}
        ]
    },
    {
        question : "Quem fez a cicatriz do Harry?",
         answers: [
            { text: "Lord Voldemort", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Ravenclaw?",
         answers: [
            { text: "Cho Chang", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Ravenclaw?",
         answers: [
            { text: "Cho Chang", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Ravenclaw?",
         answers: [
            { text: "Cho Chang", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Ravenclaw?",
         answers: [
            { text: "Cho Chang", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Ravenclaw?",
         answers: [
            { text: "Cho Chang", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Ravenclaw?",
         answers: [
            { text: "Cho Chang", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Ravenclaw?",
         answers: [
            { text: "Cho Chang", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Ravenclaw?",
         answers: [
            { text: "Cho Chang", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Ravenclaw?",
         answers: [
            { text: "Cho Chang", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Ravenclaw?",
         answers: [
            { text: "Cho Chang", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Ravenclaw?",
         answers: [
            { text: "Cho Chang", correct: true},
            { text: "Neville Longbottom", correct: false},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    }
    
]
loadCharacters();
GetQuestionTemplate();
loadQuestions()

//Questions
function GetQuestionTemplate() {
    questionHandler.innerHTML = ""
    let questionsTotal = 7
    for (let index = 0; index < questionsTotal; index++) {
        let questionTemplate = `<div id="question${index}"> Question </div>
        <div class="grid-buttonImage-container">
            <div id="answerbtn${index}" class="gridbtn"></div>
            <div class="rect">
                <img src="" alt="" id="Response${index}">
            </div>
        </div>`
        questionHandler.innerHTML += questionTemplate
    }
    for (let i = 0; i < questionsTotal; i++) {
        questionArray.push(new questoinTemplate(document.getElementById(`question${i}`), document.getElementById(`answerbtn${i}`)
    ,document.getElementById(`Response${i}`)));
    }
}
function loadQuestions(){
    
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    for (let i = 0; i < questionArray.length; i++) {
        showQuestion(shuffledQuestions[i], questionArray[i].questionElement, questionArray[i].answerButtonsElement,questionArray[i].imageRes);
        questionArray[i].imageRes.style.visibility = "hidden";
        
    }
}

function showQuestion(question, questionElement,answerButtonsElement, imageRes ) { // show the question
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('qbtn')
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', function(e){
            selectAnswer(e.target, answerButtonsElement, imageRes );
        });
        answerButtonsElement.appendChild(button)
    });
}

function selectAnswer(e, answerButtonsElement, imageRes) {
    const selectedButton = e
    const correct = selectedButton.dataset.correct
    imageRes.style.visibility = "visible";
    setStatusClass(selectedButton, correct)
    let characterName = "";
    if(!correct){ // it was chosen the wrong button
        imageRes.classList.add('imgfail')
        Array.from(answerButtonsElement.children).every(button => {
            if(button.dataset.correct){
                characterName = button.innerText;
                setStatusClass(button, button.dataset.correct)
                return false;
            }
            return true;
        })
    }
    else{
        //Appear image
        currentPlayerScore.innerText = parseInt(currentPlayerScore.innerText) + 2
        characterName = selectedButton.innerText;
        
        
    }
    //Disable buttons
    Array.from(answerButtonsElement.children).map(button => {
        button.disabled = "disabled";
    })
    //Search for the correct image
    let character = hpCharacters.find((character) => {
        if(character.name == characterName){
            
            return character
        }
    });

    imageRes.src = character.image
    imageRes.alt = character.name
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }



gryffinbtn.addEventListener('click', function(){
    currentPlayerScore = scorespanArray[0]
    BeingSorted(gryffinbtn)
    
})

puffinbtn.addEventListener('click', function(){
    currentPlayerScore = scorespanArray[1]
    BeingSorted(puffinbtn)
})

serpentnbtn.addEventListener('click', function(){
    currentPlayerScore = scorespanArray[3]
    BeingSorted(serpentnbtn)
})

ravennbtn.addEventListener('click', function(){
    currentPlayerScore = scorespanArray[2]
    BeingSorted(ravennbtn)
})

function BeingSorted(houseButton) {
    sortbtn.classList.add('hide')
    booklet.classList.remove('hide')
    const modal = closeModalButtons.closest('.modalbooklet')
    closeModal(modal)
    for (let i = 0; i < scorespanArray.length; i++) {
        if (currentPlayerScore == scorespanArray[i]) {
            scorespanArray[i].innerText = 0
            continue
        }
        scorespanArray[i].innerText = Math.floor(Math.random() * 50)
        
    }
}


