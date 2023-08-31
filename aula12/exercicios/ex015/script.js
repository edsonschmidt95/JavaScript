function verificar(){
    var data=new Date()
    var ano = data.getFullYear()
    var fano=document.getElementById('txtano')
    var res= document.getElementById('res')
    if (fano.value.length ==0 || fano.value > ano){
        alert('[ERRO] verefique os dados e tente novamente')
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade=ano - Number(fano.value)
        var genero=''
        var img= document.createElement('img')
        img.setAttribute('id' ,'foto')
        if (fsex[0].checked){
            genero= 'homem'
            if (idade < 12){
                img.setAttribute('src', 'imagens/bebemasc.jpg')
            }else if (idade <20){
                img.setAttribute('src', 'imagens/jovemmasc.jpg')
            }else if (idade <60){
                img.setAttribute('src', 'imagens/adulto.jpg')
            }else {
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else{
            genero= 'mulher'
            if (idade < 12){
                img.setAttribute('src', 'imagens/bebefem.jpg')
            }else if (idade <20){
                img.setAttribute('src', 'imagens/jovemfem.jpg')
            }else if (idade <60){
                img.setAttribute('src', 'imagens/adulta.jpg')
            }else {
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.innerHTML=(`dectamos  ${genero} com ${idade} anos`)
        
    }
    res.appendChild(img)
}