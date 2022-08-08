// La forma profesional de trabajar HTML, con JS es creado varibles que representen los elementos dentro del HTML

const h1 = document.querySelector("h1"); // Selecciona las etiquetas del HTML que sean H1
const p = document.querySelectorAll("p"); // Selecciona las etiquetas del HTML que sean P -> con ALL selecciona todas las etiquetas.
const parrafito = document.querySelector(".parrafito"); // Seleciona la etiqueta de HTML que tenga dentro un clase nombrada. Se debe poner un punto (.) antes del nombre de la clase. Muy parecido a la sintaxis de CSS.
const pid = document.querySelector("#pid"); // Seleciona la etiqueta de HTML que tenga dentro un ID nombrado. Se debe poner un punto (#) antes del nombre del ID. Muy parecido a la sintaxis de CSS.
const input = document.querySelector("input"); // Seleciona la etiqueta con nombre "input"

// A cada elemento selccionada con querySelectos se puede accteder a los metodos que tiene cada uno. -> METODOS DE JS

console.log({ h1 });

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

h1.innerHTML = "I love JS  <br>and i learn to"; // Modificacion de texto del HTML y insercion de nuevas etiquetas.

h1.innerText = "JS is hard, but mi love is big than"; // Solo le estamos insertando Texto aL html.

console.log(h1.getAttribute("class")); // Con getAttribute leemos el atirbuto o clase que pueda tener la etiqueta.

h1.setAttribute("class", "rojo"); // Se modifica la clase con set, se cambia de verde a rojo.

h1.classList.add("rojo"); // ClassLis podemos agregarle un metodo que modifique espeficiamente solo las clases.

h1.classList.remove("verde"); // Elimina la clase de verde del h1

input.value = "4756"; // Si necesidad de usar las propiedades de GET - O INNER - Se puede nombrar la propiedad y modificarla.

const img = console.log(document.createElement("img")); // Creande desde JS

img.setAttribute(
  `src="https://dninfoa.unal.edu.co/images/noticias/89ACUERDO350CSU.png"`
);
console.log(img);
pid.append(img); //Se agrega como hijo a una imagen
