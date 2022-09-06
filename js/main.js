var menuPrincipal = document.querySelector('.menu-principal');
var menuItems = document.querySelectorAll('.menu');
const menuBarra = document.querySelector('.barra-de-menu');
const corpo = document.querySelector('main');

menuBarra.addEventListener('click', abrirMenu);
for(var i=0; i<menuItems.length;i++) {
    menuItems[i].addEventListener('click', fecharMenu);
}
corpo.addEventListener('click', fecharMenu);



function abrirMenu() {
    menuPrincipal.classList.toggle('abrirMenu')
};

function fecharMenu() {
    menuPrincipal.classList.remove('abrirMenu')
};