
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


const openModalButtons = document.querySelector('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
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

//Questions to answer
let answerasked = 0
const questionsTotal = 11
const winModal = document.querySelector('#modalWin')
const loseModal = document.querySelector('#modalLose')
let houseImage

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




closeModalButtons.forEach(closeModalButton => closeModalButton.addEventListener('click', () => {
    const modal = closeModalButton.closest('.modalbooklet')
    closeModal(modal)
})) 


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
        question : "Quem substituiu Albus Dumbledore como headmaster depois deste ter sido morto?",
         answers: [
            { text: "Severus Snape", correct: false},
            { text: "Horace Slughorn", correct: false},
            { text: "Sirius Black", correct: false},
            { text: "Minerva McGonagall", correct: true}
        ]
    },
    {
        question : "Qual dos seguintes nomes pertence a Slytheryn?",
         answers: [
            { text: "Luna Lovegood", correct: false},
            { text: "Neville Longbottom", correct: false},
            { text: "Vincent Crabbe", correct: true},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Quem é o pai do Draco?",
         answers: [
            { text: "Narcissa Malfoy", correct: false},
            { text: "Scorpius Malfoy", correct: false},
            { text: "Lucius Malfoy", correct: true},
            { text: "Draco Malfoy", correct: false}
        ]
    },
    {
        question : "Qual dos seguintes nomes consegue ver Thestrials (raça de cavalo alado)?",
         answers: [
            { text: "Ron Weasley", correct: false},
            { text: "Luna Lovegood", correct: true},
            { text: "Hermione Granger", correct: false},
            { text: "Ron Weasley", correct: false}
        ]
    },
    {
        question : "Quem se tornou o parceiro do Harry Potter quando se graduou de Hogsworth?",
         answers: [
            { text: "Cho Chang", correct: false},
            { text: "Bellatrix Lestrange", correct: true},
            { text: "Hermione Granger", correct: false},
            { text: "Ginny Weasley", correct: true}
        ]
    },
    {
        question : "Qual dos seguintes nomes é Squib (non-magical person who was born to at least one magical parent)? ",
         answers: [
            { text: "Argus Filch", correct: true},
            { text: "Dolores Umbridge", correct: false},
            { text: "Kingsley Shacklebolt", correct: false},
            { text: "Rubeus Hagrid", correct: false}
        ]
    },
    {
        question : "Quem Molly Weasley matou na batalhe de Hogwarts?",
         answers: [
            { text: "Lord Voldemort", correct: false},
            { text: "Dolores Umbridge", correct: false},
            { text: "Bellatrix Lestrange", correct: true},
            { text: "Lucius Malfoy", correct: false}
        ]
    }
    
]
loadCharacters();
GetQuestionTemplate();
loadQuestions()

//Questions
function GetQuestionTemplate() {
    questionHandler.innerHTML = ""
    
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
        //Play fail sound
    }
    else{
        //Appear image and add points
        currentPlayerScore.innerText = parseInt(currentPlayerScore.innerText) + 5
        characterName = selectedButton.innerText;
        //Play sucess sound
        
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

    answerasked++
    if (CheckAnsweredAll()) {
        console.log('Calculate house points...')
        CalculateHousePoints()
    }
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


//House button
gryffinbtn.addEventListener('click', function(){
    currentPlayerScore = scorespanArray[0]
    BeingSorted(document.getElementById('griffinImg'))
    
})

puffinbtn.addEventListener('click', function(){
    currentPlayerScore = scorespanArray[1]
    BeingSorted(document.getElementById('badgerImg'))
})

serpentnbtn.addEventListener('click', function(){
    currentPlayerScore = scorespanArray[3]
    BeingSorted(document.getElementById('serpentImg'))
})

ravennbtn.addEventListener('click', function(){
    currentPlayerScore = scorespanArray[2]
    BeingSorted(document.getElementById('ravenImg'))
})

function BeingSorted(houseImg) {
    houseImage = houseImg.src
    sortbtn.classList.add('hide')
    booklet.classList.remove('hide')
    const modal = closeModalButtons[0].closest('.modalbooklet')
    closeModal(modal)
    for (let i = 0; i < scorespanArray.length; i++) {
        if (currentPlayerScore == scorespanArray[i]) {
            scorespanArray[i].innerText = 0
            continue
        }
        scorespanArray[i].innerText = Math.floor(Math.random() * 50)
        
    }
}

function CheckAnsweredAll() {
    console.log(answerasked)
    if (answerasked >= questionsTotal) {
        return true
    }
    return false
}

function CalculateHousePoints() {
    let houseWinner
    let housepointAmount = 0
    for (let index = 0; index < scorespanArray.length; index++) {
        if (scorespanArray[index].innerText == housepointAmount && scorespanArray[index] == currentPlayerScore) {
            //Same amount of points but the next is player's house
            houseWinner = scorespanArray[index]
        }
        if (scorespanArray[index].innerText > housepointAmount) {
            //Better than the actual, replace it to the best...
            housepointAmount = scorespanArray[index].innerText
            houseWinner = scorespanArray[index]
        }
        
    }
    console.log(housepointAmount)
    console.log(houseWinner)
    if (houseWinner == currentPlayerScore) {
        console.log('Vicotry')
        // Win Condition
        document.querySelector('#housewinner').src = houseImage
        document.querySelector('#wintxt').innerText = ` Parabéns, ajudastes a tua casa ganhar a House Cup com ${housepointAmount} pontos`
        openModal(winModal)
    }
    else{
        console.log('Defeat')
        //Lose Condition
        openModal(loseModal)
    }
}
