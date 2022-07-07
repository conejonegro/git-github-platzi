const date = new Date;
const actualYear = date.getFullYear();

const yearAtDom = document.getElementById("actual_year");
yearAtDom.innerHTML = actualYear + " "; 