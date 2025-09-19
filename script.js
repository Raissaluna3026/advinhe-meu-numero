'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Numero correto!';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 20;
// document.querySelector('.guess').value = 20;

//
let number = Math.trunc(Math.random()*5) + 1;
let pontos = 20;
let pontuacaoFinal = 0;

//botão check
document.querySelector('.check').addEventListener('click',function(){
    const valor = Number(document.querySelector('.guess').value);
    //document.querySelector('.message').textContent = 'Numero correto!';
    console.log(valor);
    if(!valor){
        document.querySelector('.message').textContent = 'Sem número!';
    }

    if(valor == number){
        document.querySelector('.message').textContent = 'Acertou!!'
        document.querySelector('.number').textContent = number;

        if(pontos > pontuacaoFinal){
            pontuacaoFinal = pontos;
            document.querySelector('.highscore').textContent = pontuacaoFinal;
        };

        number = Math.trunc(Math.random()*5) + 1;     
        document.querySelector('.guess').value = '';
    }else{
        document.querySelector('.message').textContent = 'Errado!!'
        pontos -= 1;
        document.querySelector('.score').textContent = pontos;
        //document.querySelector('.highscore').textContent = pontuacaoFinal; 
    }
})

//botão de novo
document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '' ;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Vamos começar..'
    pontos = 20;

})



