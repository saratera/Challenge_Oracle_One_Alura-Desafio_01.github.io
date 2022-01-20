function descriptografar (inputFrase){
    var input = document.querySelector('#textoDigitado');
    var inputFrase = input.value;

    if(inputFrase.length == 0){
       alert('O campo de texto está vazio')
    } 
    

    var  texto = '';
    for(let i = 0; i < inputFrase.length; i++){
       texto = inputFrase.replace('ai','a');
       inputFrase = texto;
       texto = inputFrase.replace('enter', 'e');
       inputFrase = texto
       texto = inputFrase.replace('imes', 'i');
       inputFrase = texto;
       texto = inputFrase.replace('ober', 'o');
       inputFrase = texto;
       texto = inputFrase.replace('ufat', 'u');
       inputFrase = texto;

       console.log(texto)
    }
    
    let descriptografia = document.querySelector('.textoResultado');
    descriptografia.textContent = texto




    
}