const h1 = document.querySelector("h1");

// Selecionanado elemetos del HTML
const formId = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

formId.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log(input1);
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}
