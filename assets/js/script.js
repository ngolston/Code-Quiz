const welcome = document.querySelector('#welcome')
const question_container = document.querySelector('#question-container')
const end = document.querySelector('#end')
const leaderBox = document.getElementById('leader')
const question = document.getElementById('question')
const choice = document.querySelectorAll('.btn-choice')
const timer_sec = document.getElementById('timer_sec')
// const playerBoard = document.querySelector('playerBoard')

// const question = document.querySelector('#score')
leaderBox.style.display = 'none'

// Variables
var curQuestion = 0
var rightAnswers = true
var availableQuestions = []
var score = 0
var secondsLeft = 180

var timerInterval ;

// Question Array
var listQuestion = [
    {
        question: 'WHICH PLANET HAS THE LARGEST ASTEROID BELT',
        choice1: 'Mercury',
        choice2: 'Saturn',
        choice3: 'Mars',
        choice4: 'Pluto',
        answer: 'Saturn',
    },
    {
        question: 'WHAT PLANET WAS RECENTLY DISCOVERED',
        choice1: 'Planet Y',
        choice2: 'the Suns Moon',
        choice3: 'Mars',
        choice4: 'Planet X',
        answer: 'Planet X',
    },
    {
        question: 'WHAT PLANET IS FURTHEST FROM NEPTUNE',
        choice1: 'The Milky Way',
        choice2: 'Mercury',
        choice3: 'Mars',
        choice4: 'Uranus',
        answer: 'Mercury',
    },
    {
        question: 'IS THERE ANY OTHER PLANETS IN THIS SOLAR SYSTEM THAT WE COULD LIVE ON',
        choice1: 'Impossible To Find Out',
        choice2: 'No',
        choice3: 'Yes',
        choice4: 'Sort Of',
        answer: 'No',
    },
    {
        question: 'IS THERE WATER AND MORE THAN 3 MOONS ON ANY PLANETS',
        choice1: 'Sort Of',
        choice2: 'Impossible To Find Out',
        choice3: 'No',
        choice4: 'Yes',
        answer: 'Yes',
    },
    {
        question: 'What is the Milky Way?',
        choice1: 'Our Galaxy',
        choice2: 'Earth',
        choice3: 'Venus',
        choice4: 'Stars',
        answer: 'Our Galaxy',
    },
    {
        question: 'What is the nearest planet to the Sun?',
        choice1: 'Jupiter',
        choice2: 'Saturn',
        choice3: 'Mercury',
        choice4: 'The Earth',
        answer: 'Mercury',
    },
    {
        question: 'How many moons go around Neptune?',
        choice1: '4',
        choice2: '8',
        choice3: '6',
        choice4: '3',
        answer: '8',
    },
    {
        question: 'What were the Sun and the planets created from?',
        choice1: 'A huge Nebula of gases and dust',
        choice2: 'A rain cloud',
        choice3: 'A lost planet',
        choice4: 'Trapped heat',
        answer: 'A huge Nebula of gases and dust',
    },
    {
        question: 'What color does Earth look like from space?',
        choice1: 'Green',
        choice2: 'Red and blue',
        choice3: 'Orange',
        choice4: 'a giant blue ball',
        answer: 'a giant blue ball',
    },
    {
        question: 'How much of Earths surface is covered with water?',
        choice1: '80%',
        choice2: '50%',
        choice3: '70%',
        choice4: '40%',
        answer: '70%',
    },
    {
        question: 'What is the biggest planet?',
        choice1: 'Venus',
        choice2: 'Jupiter',
        choice3: 'Saturn',
        choice4: 'Uranus',
        answer: 'Jupiter',
    },
    {
        question: 'Who developed the first telescope?',
        choice1: 'Kepler',
        choice2: 'Edwin Hubble',
        choice3: 'Galileo Galilei',
        choice4: 'Kennedy',
        answer: 'Galileo Galilei',
    },
    {
        question: 'When did the russians send a satellite into space?',
        choice1: '1960',
        choice2: '1971',
        choice3: '1957',
        choice4: '1980',
        answer: '1957',
    },
    {
        question: 'Who was the Apollo 11 mission leader?',
        choice1: 'Yuri Gagarin',
        choice2: 'Bob Seger',
        choice3: 'Buzz Aldrin',
        choice4: 'Neil Armstrong',
        answer: 'Neil Armstrong',
    },
    {
        question: 'What month of 2015 did the Spacecraft New Horizons pass by Pluto in?',
        choice1: 'January',
        choice2: 'March',
        choice3: 'May',
        choice4: 'July',
        answer: 'July',
    },
    {
        question: 'What is the temperature that is known as Absolute Zero?',
        choice1: 'âˆ’597.01° F',
        choice2: 'âˆ’459.67° F',
        choice3: 'âˆ’40.46° F',
        choice4: '0° F',
        answer: 'âˆ’459.67° F',
    },
    {
        question: 'What is the largest type of star in diameter?',
        choice1: 'Blue Giant',
        choice2: 'Red Giant',
        choice3: 'White Dwarf',
        choice4: 'Red Dwarf',
        answer: 'Red Dwarf',
    },
    {
        question: 'What is the farthest spacecraft from Earth, currently?',
        choice1: 'Pioneer 10',
        choice2: 'Voyager 2',
        choice3: 'New Horizons',
        choice4: 'The Hubble Space Telescope',
        answer: 'Voyager 2',
    },
    {
        question: 'Interstellar gas is composed of',
        choice1: 'only hydrogen',
        choice2: '90% hydrogen, 9% helium by weight',
        choice3: '10% hydrogen, 90% helium by numbers of atoms',
        choice4: 'some hydrogen, but mainly carbon dioxide',
        answer: '90% hydrogen, 9% helium by weight',
    },
]
// Start the Quiz
var startGame = function(event) {
    event.preventDefault()
    setTime()
    welcome.style.display = 'none'
    question_container.style.display = 'block'
    question2 ()
    // console.log(question,choice,timer_sec)
    

}
// Timer for Quiz
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer_sec.textContent = secondsLeft
  
      if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        secondsLeft = 0
        question_container.style.display = 'none'
        end.style.display = 'block'
      }
  
    }, 1000);
  }

// Action in quiz
var select = function(event) {
    var btn = event.target.textContent
    // console.log(event.target.textContent)
    if (btn === listQuestion[curQuestion].answer) {
        alert("Correct")
        score++
    } else {
        alert("Wrong Answer")
        secondsLeft-=30
    }
    curQuestion++
    if (curQuestion === listQuestion.length){
        clearInterval(timerInterval)
        question_container.style.display = 'none'
        end.style.display = 'block'
        // console.log(score)
        leaderBox.style.display = 'none'
    } else {
        question2 ()
    }
}


// Cycles through the Questions
var question2 = function() {
question.textContent = listQuestion[curQuestion].question
choice[0].textContent = listQuestion[curQuestion].choice1
choice[1].textContent = listQuestion[curQuestion].choice2
choice[2].textContent = listQuestion[curQuestion].choice3
choice[3].textContent = listQuestion[curQuestion].choice4
}

// Leaderboard
var leader = function(event){
    event.preventDefault()
    var name = document.querySelector('.form-control').value.trim()
   
    var playerData = {
        playerName: name,
        score: score,
    }
    localStorage.setItem("playerData", JSON.stringify(playerData))
    var fetch = JSON.parse(localStorage.getItem("playerData"))
    fetch.playerName
    // console.log(fetch)

    end.style.display = 'none'
    leaderBox.style.display = 'block'

    document.querySelector(".playerBoard").innerHTML = "User: " + fetch.playerName + " " + "Points: " + fetch.score
}

// All event listeners
document.getElementById("start").addEventListener("click", startGame);
document.getElementById("answer-buttons").addEventListener("click", select);
document.getElementById("btn btn-primary").addEventListener("click", leader);




// Write the form for END
// Check for the END of Question