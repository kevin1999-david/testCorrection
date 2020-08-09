//Script utilitario

function setValueLocalStorage(value) {
    localStorage.setItem('selected', '-1');
    localStorage.setItem('number', value);
    console.log("Function executed")
}

function setValueSeltected(value) {
    localStorage.setItem('selected', value);
}