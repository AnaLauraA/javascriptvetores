function calcula() {
    var vet = [];
    var mult2 = [];
    var mult3 = [];
    var mult2e3 = [];
    for(var i = 0; i < 7; i++) {
        vet.push(parseInt(prompt("Digite um número: ")));
        if(vet[i] % 2 == 0 && vet[i] % 3 == 0){
            mult2e3.push(vet[i]);
        }
        if (vet[i] % 2 == 0) {
            mult2.push(vet[i]);
        } 
        if (vet[i] % 3 == 0) {
            mult3.push(vet[i]);
        }

    }
    alert("Múltiplo de 2: " + mult2 + ". Múltiplos de 3: " + mult3 + ". Múltiplos de 2 e 3: " + mult2e3);
}