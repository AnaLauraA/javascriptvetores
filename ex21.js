var n = [];
var i = 0;
var copian = [];


function adicionan(){
    n.push(document.getElementById("n").value);
    document.getElementById("adicionado").innerHTML = n[i] + ", adicionado com sucesso! " ; 
    i++;
    
}
function calcula(){

    for(i = 0;i<n.length;i++){
        copian.push(parseInt(n[i]));
        if(n[i] == 0){
           copian[i] = 1;
        }
    }
    document.getElementById("resultado").innerHTML = "Vetor original:" + n + "<br/>" + "Vetor não nulo:" + copian;
}

