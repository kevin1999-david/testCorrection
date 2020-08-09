import { data } from "./database.js";

const container1 = document.getElementById('container1');

var index = parseInt(localStorage.getItem('number'));
var questionData = data[index - 1];

container1.innerHTML = setQuestionView();


const btnReview = document.getElementById('review'); //Button to review
const btnExplication = document.getElementById('btnExplication'); //Button to show explication
const btnPrev = document.getElementById('prev'); //Button to prev
const btnNext = document.getElementById('next'); //Buttton to next
const btnRed = document.getElementById('red'); //Button to redirect

btnRed.addEventListener('click', () => {


    const txtNum = document.getElementById('valuen');
    if (parseInt(txtNum.value) >= 1 && parseInt(txtNum.value) <= 40) {
        localStorage.setItem('selected', '-1');
        localStorage.setItem('number', txtNum.value);
        window.location.href = "solution.html";
    }
})

btnPrev.addEventListener('click', () => {
    if (index > 1) {
        index = index - 1;
        localStorage.setItem('selected', '-1');
        localStorage.setItem('number', index);
        window.location.href = "solution.html";
    }

});

btnNext.addEventListener('click', () => {

    if (index < 40) {
        index = index + 1;
        localStorage.setItem('selected', '-1');
        localStorage.setItem('number', index);
        window.location.href = "solution.html";
    }

});


btnExplication.addEventListener('click', () => {
    const containerExplication = document.getElementById('explication');
    containerExplication.innerHTML = questionData.solutionHtml;
})

btnReview.addEventListener('click', () => {
    const indexS = parseInt(localStorage.getItem('selected'));
    if (indexS != -1) {
        const msg = document.getElementById('msg');
        if (questionData.indexCorrect === indexS + 1) {
            msg.innerHTML = getHtmlMsg('success', 'La respuesta es correcta! ¡Felicidades!');
        } else {
            msg.innerHTML = getHtmlMsg('danger', 'La respuesta es incorrecta! ¡Ups!');
        }
    }

});
//Functions

function setQuestionView() {
    return `
<div class="row">
<div class="col-12">
    <h3> <strong>  Pregunta ${questionData.id}  </strong> </h3>
    <h4 class="text-justify"><strong> ${questionData.question}</strong></h4>
</div>

<div class="col-12">
    ${getHtmlOptions()}
   
</div>
<div class="col-12" id="msg">

</div>
</div>
`;

}

function getHtmlOptions() {
    var htmlOptions = ``;
    questionData.options.forEach((element, index) => {
        htmlOptions += `<div class="form-check">
        <label class="form-check-label">
            <input type="radio" name="option" id="option${index}" value="${index}" onclick="setValueSeltected(${index});"> ${element}
        </label>
    </div>`;
    });
    return htmlOptions;
}

function getHtmlMsg(value, msg) {
    return `<div class="alert alert-${value} mt-1" id="alerta">
   ${msg}
    <button type="button" class="close" data-dismiss="alert" aria-label="Cerrar">
        <span aria-hidden="true">&times;</span>
    </button>
</div>`
}