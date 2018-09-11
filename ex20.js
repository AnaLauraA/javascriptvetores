var v = [];
var i = 0;
var posi = [];
function adicionav(){
    v.push(document.getElementById("v").value);
    document.getElementById("adicionado").innerHTML = v[i] + ", adicionado com sucesso!" ; 
    i++;
    
}

function calcula(){
    for(i=0;i<v.length;i++){
        if (v[i] > 0){
            posi.push(parseInt(v[i]));
        
        }
    }
    document.getElementById("resultado").innerHTML = posi;
}

