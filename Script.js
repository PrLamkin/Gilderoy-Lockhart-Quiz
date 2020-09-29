const startbtn = document.getElementById("start-btn")
const nextbtn = document.getElementById("next-btn")
const questioncontainerZ = document.getElementById("Question-container")
const questionElement = document.getElementById("question")
const answerbtnelement = document.getElementById("answer-buttons")
const Question_counter = document.getElementById("counter")
const Quiz_score = document.getElementById("score")

let shufflequestions, currentquestion
let scoreZ = 0
let questioncounter = 0

const correct_bonus = 1
const MAX = 7

startbtn.addEventListener("click", startgame,
    Question_counter.innerText = "1" + "/" + MAX
)

nextbtn.addEventListener("click", () => {
    currentquestion++
    Question_counter.innerText = currentquestion + "/" + MAX
    NEXTQUESTION()
})

function startgame() {
    score = 0
    startbtn.classList.add("hide")
    shufflequestions = questions.sort(() => Math.random() - .5)
    currentquestion = 1
    questioncontainerZ.classList.remove("hide")
    NEXTQUESTION()
}

function NEXTQUESTION() {
    resetstate()
    showquestion(shufflequestions[currentquestion])
}

function showquestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectanswer)
        answerbtnelement.appendChild(button)
    })
}

function resetstate() {
    nextbtn.classList.add("hide")
    while (answerbtnelement.firstChild) {
        answerbtnelement.removeChild(answerbtnelement.firstChild)
    }
}

function selectanswer(e) {
    const selectedbtn = e.target
    const correct = selectedbtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerbtnelement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shufflequestions.length > currentquestion + 1) {
        nextbtn.classList.remove("hide")
    } else {
        startbtn.innerText = "reset"
        startbtn.classList.remove("hide")
        Question_counter.innerText = "7" + "/" + MAX
    }
}

function setscoretotal(scoreZ) {
    if (setStatusClass === correct) {
        incrementscore(correct_bonus)
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")

    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

incrementscore = Number => {
    scoreZ += Number;
    Quiz_score.innerText = scoreZ;
}

const questions = [{
        question: "What is Gilderoy Lockhart's favorite colour?",
        answers: [
            { text: "Lilac", correct: true }, { text: "Blue", correct: false }
        ]
    },

    {
        question: "What is Gilderoy Lockhart's greatest ambition?",
        answers: [
            { text: "To rid the world of evil!", correct: true },
            { text: "To steal achievements from other great men/women", correct: true },
            { text: "To win 'Witch Weekly greatest smile'", correct: false }
        ]
    },
    {
        question: "Which is Gilderoy Lockhart's best side for photographs?",
        answers: [
            { text: "Left", correct: true },
            { text: "right", correct: false },
            { text: "top", correct: false },
            { text: "underchin", correct: false }
        ]
    },
    {
        question: "What is Gilderoy Lockhart's greatest achievement?",
        answers: [
            { text: "Slaying the Werewolf!", correct: false },
            { text: "Banishing the Boggle-Banshee with a Broom-stick", correct: true },
            { text: "Living with a Yeti", correct: false },
            { text: "Writing Magical Me", correct: false }
        ]
    },
    {
        question: "When is Gilderoy Lockhart's birthday, and what would his ideal gift be?",
        answers: [
            { text: "July 31, A Firebolt", correct: false },
            { text: "January 26th, Harmony between magical and non-magical people", correct: true }
        ]
    },
    {
        question: "How many times has Gilderoy Lockhart win 'Witch Weekly's MOst Charming Smile Award?",
        answers: [
            { text: "100", correct: false },
            { text: "30", correct: false },
            { text: "5", correct: true },
            { text: "1", correct: false }
        ]
    }, {
        question: "Which product does Gilderoy Lockhart use to achieve his famous dazzling white smile?",
        answers: [
            { text: "Gentlemen's tooth Sparkling Paste", correct: true },
            { text: "Colgate", correct: false },
            { text: "Close-up", correct: false },
            { text: "Crest", correct: false }
        ]
    }
]