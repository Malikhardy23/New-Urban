// variables //

var menuBtn = document.getElementsByClassName('menu-button');
var mobileMenu = document.getElementsByClassName('mobile-nav')


var clickedBtn = function(){
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn)

console.log(menuBtn[0]);



