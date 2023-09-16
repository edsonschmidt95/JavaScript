function contar(){
    var ini=document.getElementById('ini')
    var fim=document.getElementById('fim')
    var pul=document.getElementById('pul')
     if(ini.Value.length==0 || fim.Value.length==0 ||  pul.Value.length==0 ){
        window.alert('[ERRO] falta dados')
     }else{
        alert('tudo OK')
     }
}