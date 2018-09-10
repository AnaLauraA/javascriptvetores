var x = [];
var i = 0;
var veb = [];
function adicionax(){
    x.push(document.getElementById("x").value);
    document.getElementById("adicionado").innerHTML = x[i] + ", adicionado com sucesso! " ; 
    i++;   
}
function calcula(){
    var vm = x[0];
    for(i = 0;i<x.length;i++){ 
        if(x[i] > vm) { 
           vm = x[i];
        }
    }
    document.getElementById("resultado").innerHTML = vm;
}

