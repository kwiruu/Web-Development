let Motor = document.getElementById('Motor');
let bg = document.getElementById('bg');
let text = document.getElementById('text');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
let text5 = document.getElementById('text5');
let square = document.getElementById('square');
let square1 = document.getElementById('square1');

let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    Motor.style.left = -value * 1.50 + 'px';
    bg.style.left = value * 3 + 'px';
    bg.style.top = -value * 3 + 'px';
    square.style.top = -value * 0.5 + 'px';
    square1.style.top = -value * 1 + 'px';
    
    text.style.marginLeft = value * 1 + 'px';
    text1.style.marginTop = -value * 5 + 'px';
    text2.style.marginLeft = -value * 0.25 + 'px';
    text3.style.marginLeft = -value * 1.25 + 'px';
    text4.style.marginLeft = -value * 2 + 'px';
    text5.style.marginTop = -value * 1 + 'px';
})