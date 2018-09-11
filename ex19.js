var p = [];
var q = [];
var pq = [];
var i = 0;
var mult = 0;
function adicionaq(){
    p.push(parseInt(document.getElementById("p").value));
    q.push(parseInt(document.getElementById("q").value));
    document.getElementById("adicionado").innerHTML = p[i] + ", adicionado com sucesso! " ; 
    document.getElementById("adicionadoq").innerHTML = q[i] + ", adicionado com sucesso! " ;  
    i++;
}
var i = 0;
function calcula(){
    for(i = 0;i<p.length;i++){
        mult = p[i]*q[i]
        pq.push(mult)
    }
    document.getElementById("resultado").innerHTML ="O resultado da multiplicação é: " + pq;
}

