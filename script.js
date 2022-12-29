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



function init(){
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}


function showQuestion(){
    let question = questions[currentQuestion];
    
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];



}