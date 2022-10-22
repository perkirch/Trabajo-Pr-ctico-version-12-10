// Validación Formulario

var mayuscula = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var minuscula = "abcdefghijklmnñopqrstuvwxyz";
var numero = "0123456789";


// devuelve true si un caracter de "palabra" está en "tipoCaracter"
// devuelve false en caso contrario
function incluyeUnCaracter(palabra, tipoCaracter){
  for(caracter of palabra){
    if(tipoCaracter.includes(caracter)){
      return true;
    }
  }
  return false;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formu").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();

    const usuario = document.getElementById("usuario").value;
    if(usuario.length <=5) {
      alert('El usuario debe contener al menos 6 caracteres')
      return;
    }

    const nombre = document.getElementById("nombre").value;
    if(nombre.length == 0) {
      alert('Escribe tu nombre');
      return;
    }
    if(!(incluyeUnCaracter(nombre, mayuscula))){
      alert('Utiliza al menos una mayúscula');
      return;
    }

    const apellido = document.getElementById("apellido").value;
    if(apellido.length == 0) {
      alert('Escribe tu apellido');
      return;
    }
    if(!(incluyeUnCaracter(apellido, mayuscula))){
      alert('Utiliza al menos una mayúscula');
      return;
    }

    const email = document.getElementById("email").value;
    if(email.length == 0) {
      alert('Escribe tu email');
      return;
    }

    const clave = document.getElementById("clave").value;
    if(clave.length == 0) {
      alert('Ingrese una clave');
      return;
    }
    if(!(incluyeUnCaracter(clave, mayuscula))){
      alert('La clave debe contener alguna mayúscula');
      return;
    }
    if(!(incluyeUnCaracter(clave, minuscula))){
      alert('La clave debe contener alguna minúscula');
      return;
    }
    if(!(incluyeUnCaracter(clave, numero))){
      alert('La clave debe contener algún número');
      return;
    }
    if (clave.length <=5) {
      alert('La clave debe tener al menos 6 caracteres');
      return;
    }
    if (clave.length >=10) {
      alert('La clave debe tener menos de 10 caracteres');
      return;
    }

    const pais = document.getElementById("pais").value;
    if(pais.length == 0) {
      alert('Escribe tu país');
      return;
    }
   const terminos = document.getElementById("terminos");
    if(terminos.checked == false) {
    alert('Acepta los términos');
    return;
  }
    this.submit();
  }
  
  