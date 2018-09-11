var vet = [];
var pares = [];
var impares = [];
function adiciona() {
    vet.push(parseInt(document.getElementById("num")));
}

function calcula() {
    for(var i = 0; i < vet.length; i++) {  
        if (vet[i] % 2 == 0) {
            pares.push(vet[i]);
        } else {
            impares.push(vet[i]);
        }
    }
    document.getElementById("rPares").innerHTML = "Números pares: " + pares + ". Quantidade de números pares: " + pares.length;
    document.getElementById("rImpares").innerHTML = "Números ímpares: " + impares + ". Quantidade de números impares: " + impares.length;
}


