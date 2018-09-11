var c = [];
var i = 0;
var veb = [];
function adicionac(){
    
    c.push(parseInt(document.getElementById("c").value));
    document.getElementById("adicionado").innerHTML = c[i] + ", adicionado com sucesso! " ; 
    veb.push((c[i]));
    i++;
    
}
i=0;
function calcula(){
    for(i = 0;i<veb.length;i++){
        if(veb[i] <= 0){ 
           veb.splice(i,1);
           i--;
        }
        
    }
    document.getElementById("resultado").innerHTML = "Vetor A: " + c + "<br/>" + "Vetor compactado: " + veb;
}

