var c = [];
var i = 0;
var veb = [];
function adicionac(){
    
    c.push(parseInt(document.getElementById("c").value));
    document.getElementById("adicionado").innerHTML = c[i] + ", adicionado com sucesso! " ; 
    i++;
    veb.push((c[i]));
}

function calcula(){
    for(i = 0;i<veb.length;i++){
        
        if(veb[i] <= 0){ 
           veb.splice(i,1);
        }
    }
    document.getElementById("resultado").innerHTML = "Vetor A: " + c + "<br/>" + "Vetor compactado: " + veb;
}

