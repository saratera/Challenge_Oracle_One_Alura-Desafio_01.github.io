function copiarTexto(){
    let areaDoTextoParaCopiar = document.querySelector('.textoResultado');
    let textoCopiado = areaDoTextoParaCopiar.textContent;
    navigator.clipboard.writeText(textoCopiado)
    
}