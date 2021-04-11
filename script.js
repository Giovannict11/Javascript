function  verificar ( ) {
    var  data  =  new  Date ( )
    var  ano  =  dados . getFullYear ( )
    var  fano  =  janela . documento . getElementById ( "txtano" )
    var  imagem  =  janela . documento . getElementsByName ( 'img' )
    var  res  =  janela . documento . querySelector ( 'div # res' )
    if  ( Número  ( valor fano . ) > ano ) {   
    janela . alerta ( "[ERRO] Verificar os dados de nascimento" )

    } else {
        var  fsex  =  document . getElementsByName ( 'radsex' )
        var  idade  =  ano  -  Numero ( fano . valor )
        var  genero  =  ''
        var  img  =  documento . createElement ( 'img' )
         
        if  ( fsex  [ 0 ] . verificado )  {
            genero  =  'Homem'
            if  ( idade  > =  0  &&  idade  <  10  )  {
                img . setAttribute ( 'src' ,  'fotobebeMA.png' )
                
                
            } else  if  ( idade  > 10  &&  idade  <= 21 ) {
            img . src  =  "fotojovem.png"
            } else  if ( idade  > =  22  &&  idade  < 60 ) {
            img . src  =  "fotoadulto.png"
            } else {
            img . src =  "Fotoidoso.png"
            }
                } else   if  ( fsex [ 1 ] . verificado ) {
        genero  =  'Mulher'
        if  ( idade  > =  0  &&  idade  <  10  )  {
            img . src  =  "fotobebeFE.png"

            
        } else  if  ( idade  > 10  &&  idade  < 21 ) {
        img . src  =  "fotojovemF.png"
        } else  if ( idade  >  22  &&  idade  < 60 ) {
img . src  =  "fotoadulta.png"
        } else {
            img . src =  "fotoidosa.png"
        }
    }
    res . estilo . textAlign  =  'centro'
    
    res . innerHTML  =  `Detectamos $ { genero } com $ { idade } anos.`
    res . appendChild ( img )

}
}
