//querySelectoy

const heading = document.querySelector('.header__texto h2');//devuelve 0 o 1 elemento tambien se puede usar para id
heading.textContent = 'Nuevo Heading blog de cafe'
heading.classList.add('nueva-clase');
console.log(heading);
//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
//console.log(enlaces)//devuelve un arreglo enlaces[0]

enlaces[0].textContent = 'Nuevo texto para enlaces';
//enlaces[0].href = 'http://google.com'
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

//getElementById

const heading2 = document.getElementById('heading');
//console.log(heading2)

//generar un nuevo enlace
const nuevoEnlace = document.createElement('A');;

//agregar href
nuevoEnlace.href = 'nuevo-enlace.html'
// agregar texto
nuevoEnlace.textContent = 'Un nuevo enlace'
//agregar clase
nuevoEnlace.classList.add('navegacion__enlace');
//agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace);
//Eventos
// console.log(1);

// window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen del HTML esten listos
//     console.log(2);
// });

// window.onload = function(){ //load espera a que el JS y los archivos que dependen del HTML esten listos
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){ //solo espera por el HTML, no espera CSS o imagenes
//     console.log(4);
// })

// console.log(5);

// function imprimir(){
//     console.log(2);
// }

//window.onscroll = function(evento){
//    console.log(evento);
//    console.log('scrolling...');
//}

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
//evento Submit debes estar asociado a el formulario 
const formulario = document.querySelector('.formulario');
//seleccionar elementos y asociarles un evento este esta asociado al boton
const btnEnviar = document.querySelector('.boton--primario');

nombre.addEventListener('input', leerTexto)
email.addEventListener('input',leerTexto )
mensaje.addEventListener('input', leerTexto)

// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     console.log(evento.target);
//     evento.preventDefault();
    
//     console.log('enviando formulario');
// });


formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //validar un formulario
    const {nombre, email, mensaje} = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return; //corta la ejecucion del codigo
    }
    mostrarAlerta('Mensaje enviado correctamente');
    //enviar formulario
});
// function mostrarMensaje(mensaje) mas efciente que las de abajo
function mostrarAlerta (mensaje, error = null ){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    //desaparezca despues de 5 segundos
    setTimeout(() => {alerta.remove();}, 5000);
}
// function mostrarError (mensaje) este es muy repetitivo
// function mostrarMensaje(mensaje){
//     //const alerta = document.createElement('P');
//     alerta.textContent = mensaje;
//     alerta.classList.add('correcto');
//     formulario.appendChild(alerta);
//     //desaparezca despues de 5 segundos
//     setTimeout(() => {alerta.remove();}, 5000);

// }
function leerTexto(e){
    datos[e.target.id] = e.target.value;
    console.log(e.target);

    console.log(datos);
}
// function mostrarMensaje(mensaje) este es muy repetitivo
// function mostrarErorr (mensaje){
//    // const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild(error);

//     //desaparezca despues de 5 segundos
//     setTimeout(() => {
//         error.remove();
//     }, 5000);
// }