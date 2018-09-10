var vet = [];
function vet1() {
    var pares = [];
    var impares = [];
    for(var i = 0; i < 6; i++) {
        vet.push(parseInt(prompt("Digite um número: "))); 
        if (vet[i] % 2 == 0) {
            pares.push(vet[i]);
        } else {
            impares.push(vet[i]);
        }
    }
    document.getElementById("rPares").innerHTML = "Números pares: " + pares + ". Quantidade de números pares: " + pares.length;
    document.getElementById("rImpares").innerHTML = "Números ímpares: " + impares + ". Quantidade de números impares: " + impares.length;
}
