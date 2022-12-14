//Obtenemos los botones, chusmea aca, ver mas de naturaleza y de previaje y eñ boton mas info del slider
const btn_chusmea = document.querySelector('#btn-chusmea');
const btn_naturaleza = document.querySelector('#btn-naturaleza');
const btn_previaje = document.querySelector('#btn-previaje');
const btn_slider = document.getElementById('botonHero');

// ESCUCHO EL EVENTO DE PONER Y SACAR CURSOR DENTRO Y FUERA DE LOS BOTONES
// Y LES PASO LA FUNCION DE CAMBIAR TEXTO DEL BOTON

btn_naturaleza.addEventListener('mouseover', buttonChangeText);
btn_naturaleza.addEventListener('mouseout', buttonChangeText);
btn_previaje.addEventListener('mouseover', buttonChangeText);
btn_previaje.addEventListener('mouseout', buttonChangeText);

btn_chusmea.addEventListener('mouseover', buttonChangeText_chusmea_aca);
btn_chusmea.addEventListener('mouseout', buttonChangeText_chusmea_aca);

btn_slider.addEventListener('mouseover', buttonChangeText_mas_info);
btn_slider.addEventListener('mouseout', buttonChangeText_mas_info);

// CREO FUNCION REUTILIZABLE PARA CAMBIAR TEXTO DE TODOS LOS BOTONES CON UNA SOLA FUNCION
function buttonChangeText (obtengoEventodelBotonComoParametro){
  if (obtengoEventodelBotonComoParametro.target.textContent === 'VER MÁS'){
    obtengoEventodelBotonComoParametro.target.textContent = 'VER MÁS →';
  }else{
    obtengoEventodelBotonComoParametro.target.textContent = 'VER MÁS';
  }
}

function buttonChangeText_chusmea_aca(otro_nombre_para_obtener_evento){
  if (otro_nombre_para_obtener_evento.target.textContent === 'CHUSMEÁ ACÁ'){
    otro_nombre_para_obtener_evento.target.textContent += ' →';
  } else{
    otro_nombre_para_obtener_evento.target.textContent = 'CHUSMEÁ ACÁ';
  }
}

function buttonChangeText_mas_info (event){
  if (event.target.textContent === 'MÁS INFO'){
    event.target.textContent += ' →';
  }else{
    event.target.textContent = 'MÁS INFO';
  }
}