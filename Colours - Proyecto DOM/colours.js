const boton = document.getElementById("boton-color");
const color = document.getElementById("color");

function randomColour() {
  let digitos = "0123456789ABCDEF";
  let colores = "#";

  for (let i = 0; i < 6; i++) {
    let indiceRandom = Math.floor(Math.random() * 16);

    colores += digitos[indiceRandom];
  }

  return colores;
}

boton.addEventListener("click", function () {
  let bodyColour = randomColour();

  color.innerText = bodyColour;
  boton.style.backgroundColor = bodyColour;

  document.body.style.backgroundColor = bodyColour;
});
