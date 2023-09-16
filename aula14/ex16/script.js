function contar(){
    var ini = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var pul = document.getElementById("txtp")
    var res = document.getElementById("res")
     if(ini.value.length == 0 || fim.valuelength == 0 ||  pul.value.length == 0 ){
        window.alert('[ERRO] falta dados')
     }else{
        res.innerHTML='contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pul.value)
        if (i<f){
             for (var c=i; c<=f; c+=p){
            res.innerHTML += ` ${c} \u{1F449} `
        }
            
        } else{
            for (var c=i; c>=f; c-=p){
                res.innerHTML += ` ${c} \u{1F449} `  
            }
        }
       
     }res.innerHTML += `\u{1f3c1}`
} 