let questions = [
    {
        "question": "Was kann man nicht gleichzeitig machen?",
        "answer_1": "lesen und schreiben",
        "answer_2": "atmen und schlucken",
        "answer_3": "fühlen und sehen",
        "answer_4": "riechen und schmecken",
        "right_answer": 2
    },
    {
        "question": "Welche Blutgruppe ist universalspendbar?",
        "answer_1": "0",
        "answer_2": "A",
        "answer_3": "B",
        "answer_4": "AB",
        "right_answer": 1
    },
    {
        "question": "Wieviele Augenlieder hat eine Eule?",
        "answer_1": "1",
        "answer_2": "2",
        "answer_3": "3",
        "answer_4": "4",
        "right_answer": 3
    },
    {
        "question": "Wo liegt der Weltrekord für die meiste Anzahl der Faltung eines Baltt Papiers?",
        "answer_1": "8x",
        "answer_2": "10x",
        "answer_3": "12x",
        "answer_4": "14x",
        "right_answer": 3
    },
    {
        "question": "Wann erreichen Grönlandhaie ihre Geschlechtsreife?",
        "answer_1": "nach 50 Jahren",
        "answer_2": "nach 150 Jahren",
        "answer_3": "nach 200 Jahren",
        "answer_4": "nach 350 Jahren",
        "right_answer": 2
    }

];


let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
    
}

function showQuestion(){

    if (currentQuestion >= questions.length) {
        showEndScreen();
    } else {  // Show question
        updateToNextQuestion();

    }
}

function showEndScreen(){
     
            document.getElementById('endScreen').style = '';
            document.getElementById('questionBody').style = 'display: none';
    
            document.getElementById('amount-of-questions').innerHTML = questions.length;
            document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
            document.getElementById('header-image').src = 'img/cup.jpg';
}


function updateToNextQuestion() {
    let percent = (currentQuestion +1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;


    let question = questions[currentQuestion];
    
    document.getElementById('question-number').innerHTML = currentQuestion +1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];                     
    let selectedQuestionNumber = selection.slice(-1);                 
    let idOfRightAnswer = `answer_${question['right_answer']}`;    
        
    if(selectedQuestionNumber == question['right_answer']) {  // Richige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');           
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');            
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
        document.getElementById('next-button').disabled = false;
}

function nextQuestion(){
    currentQuestion++;   // z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;  // button wird gesperrt
    resetAnserButtons();
    showQuestion();
}

function resetAnserButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-image').src = 'img/tree.jpg';
    document.getElementById('questionBody').style = '';  
    document.getElementById('endScreen').style = 'display: none';  
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}






















