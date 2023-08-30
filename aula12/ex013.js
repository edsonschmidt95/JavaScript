var agora= new Date()
var diasem= agora.getDay()
var nomedia;
/*
0=domingo
1=segunda
2=terça
3=quarta
4=quinta
5=sexta
6=sabado
*/

switch(diasem){
    case 0:
        nomedia='domingo';
        break;
    case 1:
        nomedia='segunda';
        break;
    case 2:
        nomedia='terça';
        break;
    case 3:
        nomedia='quarta';
        break;
    case 4:
        nomedia='quinta';
        break;
    case 5:
        nomedia='sexta';
        break;
    case 6:
        nomedia='sabado';
        break;
    default:
        nomedia='[ERRO]data invalida!';
        break;
}
console.log (`hoje é ${nomedia}`)