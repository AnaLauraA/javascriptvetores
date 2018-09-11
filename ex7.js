function calcula() {
    var nums = [];
    var cont = 0;
    var soma = 0;
    for(var i = 0; i < 10; i++) {
        nums.push(parseFloat(prompt("Digite um número")));
        if (nums[i] < 0) {
            cont += 1;
        } else {
            soma += nums[i];
        }
    }
    alert("Existem no vetor " + cont + " números negativos");
    alert("A soma dos números positivos dá " + soma);
}