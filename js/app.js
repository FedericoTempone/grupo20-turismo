//Obtenemos las clases de los elementos del html para crear navbar
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

//CREAMOS FUNCION DE ABRIR Y CERRAR MENU
//SIMPLEMENTE LE AÑADIMOS Y LE QUITAMOS LA CLASE MENU_OPENED AL MENU

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

//INVOCAMOS LA CLASE TOGGLE MENU DEFINIDA ANTERIORMENTE, CUANDO PERCIBIMOS 
//QUE EL USUARIO CLICKEO EL BOTON HAMBURGUESA O EL BOTON DE CLOSE
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

