let dark = document.getElementById('dark');
let text = document.getElementById('text');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
let text5 = document.getElementById('text5');

let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    text.style.marginLeft = value * 1 + 'px';
    text1.style.marginTop = -value * 5 + 'px';
    text2.style.marginLeft = -value * 0.25 + 'px';
    text3.style.marginLeft = -value * 1.25 + 'px';
    text4.style.marginLeft = -value * 2 + 'px';
    text5.style.marginTop = -value * 1 + 'px';
})