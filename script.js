import { barcelona, roma, paris, londres } from './ciudades.js'

let enlaces=document.querySelectorAll('a');

let tituloElemento=document.getElementById('titulo');
let precioElemento=document.getElementById('precio');
let subTituloElemento=document.getElementById('subtitulo');
let parrafotElemento=document.getElementById('parrafo');

enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //remover el activo
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })


        //agregar el active que corresponda
        this.classList.add('active')

        //traer info del que corresponda a la eleccion
        let contenido = obtenerContenido(this.textContent)


        //mostrar en el contenido del DOM
        tituloElemento.innerHTML=contenido.titulo
        precioElemento.innerHTML=contenido.precio
        subTituloElemento.innerHTML=contenido.subtitulo
        parrafotElemento.innerHTML=contenido.parrafo

    });
    
});

//funcion para traer la info correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido={
        'Barcelona': barcelona,
        'Roma':roma,
        'Paris':paris,
        'Londres':londres
    };
    return contenido[enlace];
}