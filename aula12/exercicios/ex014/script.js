function carregar(){
var msg= document.getElementById('msg')
var img= document.getElementById('imagem')
var data=new Date()
var hora= data.getHours()
msg.innerHTML=(`agora são ${hora} horas`)
    if(hora>=0 && hora <12){
        msg.innerHTML=(`bom dia, agora são ${hora}horas`)
        img.src= 'imagens/manha.jpg'
        document.body.style.background='#F6A574'
    }else if(hora >=12 && hora<18){
        msg.innerHTML=(`boa tarde, agora são ${hora}horas`)
        img.src= 'imagens/tarde.jpg'
        document.body.style.background='#FC4302'
    }else{
        msg.innerHTML=(`boa noite, agora são ${hora}horas`)
        img.src= 'imagens/noite.jpg'
        document.body.style.background='#22484B'
    }
}


