'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Numero correto!';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 20;
// document.querySelector('.guess').value = 20;
document.querySelector('.check').addEventListener('click',function(){
    const valor = Number(document.querySelector('.guess').value);
    //document.querySelector('.message').textContent = 'Numero correto!';
    console.log(valor);
    if(!valor){
        document.querySelector('.message').textContent = 'Sem número!';
    }
})