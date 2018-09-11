function calcula() {
    var vet = [];
    var vetPos = [];
    for(var i = 0; i < 15; i++) {
        vet.push(parseInt(prompt("Digite um número ")));
        if (vet[i] == 30) {
            vetPos.push(i+1);
        }
    }
    alert("Existem " + vetPos.length + " elementos iguais a 30 nas posições " + vetPos);
}
