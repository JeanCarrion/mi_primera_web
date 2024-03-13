let nombre = "Marcos";
let ciudad = "Bogotá";
let hobbie = "Leer en casa";

let parrafo = document.querySelector("#personalyo");

function cambiarDatos(nombre, ciudad, hobbie) {
    let contenido = `Me llamo ${nombre}, vivo en ${ciudad} y mi hobbie favorito es ${hobbie}, actualmente estoy trabajando y estudiando en la beca generacional con la start up argentina Egg con una metodología de enseñansa diferente.`;

    return contenido;
}

personalyo.innerText = cambiarDatos(nombre, ciudad, hobbie)

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
