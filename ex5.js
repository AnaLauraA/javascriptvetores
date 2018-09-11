function calcula() {
    var vetLogic = [];
    var vetLingProg = [];
    var matricAmbos = [];
    alert("Insira os códigos dos 15 alunos que cursam Lógica");
    for(var i = 0; i < 15; i++) {
        vetLogic.push(prompt((i + 1) + "º código"));
    }
    alert("Insira os códigos dos 10 alunos que cursam Linguagem de Programação");
    for(var i = 0; i < 10; i++) {
        vetLingProg.push(prompt((i + 1) + "º código"));
    }
    for(var i = 0; i < vetLingProg.length + 1; i++) {
        if (vetLogic.indexOf(vetLingProg[i]) != -1) {
            matricAmbos.push(vetLingProg[i]);
        }
    }
    alert("Existem " + matricAmbos.length + " alunos matriculados em ambos os cursos." +
          " Os códigos das matrículas são: " + matricAmbos);
}