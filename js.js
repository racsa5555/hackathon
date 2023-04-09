let btn = document.querySelector('.button')
let sun = document.querySelector('.planet')
let bck = document.querySelector('.container')
btn.addEventListener('click',function(){
    if (btn.innerHTML == 'Включить солнце'){
        btn.innerHTML = 'Включить луну';
        sun.style.borderColor = 'white';
        sun.style.backgroundColor = 'blue';
        bck.style.backgroundColor = 'black';
    }
    else{
        sun.style.borderColor = 'black';
        btn.innerHTML = 'Включить солнце';
        sun.style.backgroundColor = 'yellow';
        bck.style.backgroundColor = 'antiquewhite';
    }
})