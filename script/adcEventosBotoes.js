//selecionar o botão de criptografar e add função de click

let btnCriptografar = document.querySelector('#criptografar');
btnCriptografar.addEventListener('click', function(event){    
      
    console.log('criptografar')
    criptografar()
    mensagemCriptografar()
      
          
    event.preventDefault()
});


//selecionar o botão de descriptografar e add função de click

let btnDescriptografar = document.querySelector('#descriptografar');
btnDescriptografar.addEventListener('click', (event)=>{    
    console.log('oia eu aqui')

    descriptografar ()
    mensagemDescriptografar()
    

    event.preventDefault()
})

//selecionar o botão de copiar e add função de click

let btnCopiar = document.querySelector('#copiar');
btnCopiar.addEventListener('click', (event)=>{   
    
    copiarTexto()

    event.preventDefault()
    
})