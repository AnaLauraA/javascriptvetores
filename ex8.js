function calcula() {
    var alunos = [];
    var notas = [];
    var maiorMed = 0;
    alert("Insira o nome e a média final dos alunos");
    for(var i = 0; i < 3; i++) {
        alunos.push(prompt("Nome:"));
        notas.push(parseFloat(prompt("Nota média final:")));
        if(notas[i] > maiorMed) {
            maiorMed = notas[i];
        }
        if(notas[i] < 7) {
            alert("Este aluno precisa tirar " + (10 - notas[i]) + " no exame final para ser aprovado."); 
        }
    }
    alert("O aluno com a maior média foi " + alunos[notas.indexOf(maiorMed)] + ", com uma média de " + maiorMed);
}