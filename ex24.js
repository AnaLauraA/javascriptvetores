var p = [];
var i = 0;
function adicionap(){
    x.push(parseInt(document.getElementById("p").value));
    document.getElementById("adicionado").innerHTML = p[i] + ", adicionado com sucesso! " ; 
    i++;
}

function calcula(){
    for(i = 0;i<p.length;i++){ 
        if(p[i] ){ 
           m = x[i];
        }
        soma = soma + x[i];
    }
    div = soma/m;
    document.getElementById("resultado").innerHTML =  ;
}

