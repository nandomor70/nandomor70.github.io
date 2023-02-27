//variables
const boton = document.querySelector('#boton');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const direccion = document.querySelector('#direccion');
const telefono = document.querySelector('#telefono');
const calle = document.querySelector('#calle');
const nro = document.querySelector('#nro');
const ciudad = document.querySelector('#ciudad');
const pais = document.querySelector('#pais');


//funcion
const nuevousuario = async () => {
  const url = 'https://randomuser.me/api/';
  const respuesta = await fetch(url);
  const {results} = await respuesta.json();
  const datos = results [0];
  //console.log(datos);
  foto.src = datos.picture.medium;
  nombre.textContent = datos.name.first;
  apellido.textContent = datos.name.last;
  correo.textContent = datos.email;
  telefono.textContent = datos.phone;
  calle.textContent = datos.location.street.name;
  nro.textContent = datos.location.street.number;
  ciudad.textContent = datos.location.city;
  pais.textContent = datos.location.country;
  var link = "mailto:"+ datos.email;
  var element = document.createElement("a");
  element.setAttribute("href", link);
  element.innerHTML = "Enviar correo";
  document.getElementById("tab4").appendChild(element);
}

//recarga pagina
document.addEventListener('DOMContentLoaded' , nuevousuario);
