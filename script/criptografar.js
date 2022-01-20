/*`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"`*/

let palavra = [];


function criptografar(inputFrase){
    var input = document.querySelector('#textoDigitado');
    var inputFrase = input.value;

    if(inputFrase.length == 0){
       alert('O campo de texto está vazio')
    }  
    
    palavra
    for(let i = 0; i < inputFrase.length; i++){
       if(inputFrase[i] == 'a'){
           palavra.push('ai')
       }
       else if(inputFrase[i] == 'e'){
           palavra.push("enter")
       }
       else if(inputFrase[i] == 'i'){
           palavra.push("imes")
       }
       else if(inputFrase[i] == 'o'){
           palavra.push("ober")
       }
       else if(inputFrase[i] == 'u'){
           palavra.push('ufat')
       }
       else{
           palavra.push(inputFrase[i])
       }
    }

    let resultado = document.querySelector('.textoResultado');
    resultado.textContent = palavra.join('')
    palavra = []
    console.log(inputFrase)
}    

