function verificar(){
    var data=new Date()
    var ano = data.getFullYear()
    var fano=document.getElementById('txtano')
    var res= document.getElementById('res')
    if (fano.Value.length == 0 || fano.Value >ano){
        window.alert('[ERRO] verefique data')
    }else{
        window.alert('tudo ok')
    }
}