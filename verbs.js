const showVerb = document.getElementById('showVerb');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');

const first = document.getElementById('first-verb');
const second = document.getElementById('secondt-verb');
const third = document.getElementById('third-verb');
const fourth = document.getElementById('fourth-verb');

const next = document.getElementById('next');
const verbsCounter = document.getElementById('verbs-counter');
const allRigthCounter = document.getElementById('all-right-counter');
const verbsContainer = document.getElementById('verbs-container');

//const numberOfVerbs = verbs.lenght;

let answerRoullete = [0,1,1,1];
let everyNumberOfVerb = [];
let rightAnswer;
let allRightAnswers;

next.addEventListener('click', function(){
    ponerVerbo();
    //next.style.display = 'none';
});

function ponerVerbo(){
    showVerb.innerHTML = "Deposita 200 bitcoins para jugar"
}


