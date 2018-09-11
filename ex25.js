var x = [];
var i = 0;
function adicionax(){
    x.push(parseInt(document.getElementById("x").value));
    document.getElementById("adicionado").innerHTML = x[i] + ", adicionado com sucesso! " ; 
    i++;
}
var soma = 0;

function calcula(){
    var m = x[0];
    for(i = 0;i<x.length;i++){ 
        if(x[i] > m){ 
           m = x[i];
        }
        soma = soma + x[i];
    }

    div = soma/m;
    document.getElementById("resultado").innerHTML = "Elementos divididos pelo maior vetor = " + m + "<br/>" + " Resultado igual a: " + div;
}

