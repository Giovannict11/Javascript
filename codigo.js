function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var imagem = window.document.getElementsByName('img')
    var res = window.document.querySelector('div#res')
    if (Number (fano.value) > ano ){
    window.alert("[ERRO] Verifique a data de nascimento")

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
         
        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10 ) {
                img.setAttribute('src', 'fotobebeMA.png')
                
                
            }else if (idade >10 && idade <=21){
            img.src = "fotojovem.png"
            }else if(idade >= 22 && idade <60){
            img.src = "fotoadulto.png"
            }else{
            img.src= "fotoidosa.png"
            }
                }else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10 ) {
            img.src = "fotobebeFE.png"

            
        }else if (idade >10 && idade <21){
        img.src = "fotojovemF.png"
        }else if(idade > 22 && idade <60){
img.src = "fotoadulta.png"
        }else{
            img.src= "fotoidosa.png"
        }
    }
    res.style.textAlign = 'center'
    
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

}
}