import { data } from "./database.js";

const containerQ = document.getElementById('cards_q');

const btnRed = document.getElementById('red');
btnRed.addEventListener('click', () => {
    const txtNum = document.getElementById('valuen');

    if (parseInt(txtNum.value) >= 1 && parseInt(txtNum.value) <= 40) {
        localStorage.setItem('number', txtNum.value);
        window.location.href = "solution.html";
    }


});


var htmlCode = ``;

loadQuestionOnCards();

containerQ.innerHTML = htmlCode;

function loadQuestionOnCards() {
    htmlCode = ``;
    data.forEach(element => {
        htmlCode += `
    <div class="col-12 col-sm-6 col-lg-4 card-q card-group">
        <div class="card">
            <div class="card-header">
               <strong>Pregunta ${element.id}</strong>
            </div>
            <div class="card-body">
                <p class="card-text">
                ${element.question}
                </p>
            </div>
            <div class="card-footer">
            <a href="solution.html" id="pregunta${element.id}" class="btn btn-primary"  onclick="setValueLocalStorage(${element.id})">Ir a la pregunta</a>
            </div>

        </div>
    </div>
        `;
    });

}

