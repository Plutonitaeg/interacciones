function encender(){
    var bombilla = document.getElementById('foco');
    bombilla.src='img/pic_bulbon.gif';    
}

function apagar (){
    var bombilla = document.getElementById('foco');
    bombilla.src='img/pic_bulboff.gif';
    
}

function ocultar() {
    var bombilla = document.getElementById('foco')
    bombilla.style.display='none';
}

function mostrar() {
    var bombilla = document.getElementById('foco')
    bombilla.style.display='block';
}

function cambiarfondo(){
    var color; prompt("ingrese color en ingles");
    var selector = document.getElementById('body');
    selector.style.backgroundcolor=color;

}

function cambiarsize(){
    var selector = document.getElementById('foco');
    selector.style.cssText="transition: 2s;background-color:red; width: 400px;";
}

function circulo(){
    var figura = document.getElementById ('figura');
    figura.classList.toggle("circulo");
}

function arriba(){
    var figura = document.getElementById ('figura');
    figura.classList.toggle('top');
}
