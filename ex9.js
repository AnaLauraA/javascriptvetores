function calcula() {
    var produtos = [];
    var codigos = [];
    var precos = [];
    var relat = "";
    alert("Insira 10 produtos com seus respectivos códigos e preços")
    for(var i = 0; i < 3; i++) {
        alert((i + 1) + "º produto")
        produtos.push(prompt("Nome:"));
        codigos.push(parseInt(prompt("Código:")));
        precos.push(parseFloat(prompt("Preço:")));

        var precAnt= precos[i];
        if(codigos[i] % 2 == 0 && precos[i] > 1000) {
            precos[i] *= 1.2;
        }else if(codigos[i] % 2 == 0) {
            precos[i] *= 1.15;
        }else {
            precos[i] *= 1.1;
        }
        relat += "Nome: " + produtos[i] + " - " +
                "Código: " + codigos[i] + " - " +
                "Novo preço: R$" + precos[i].toFixed(2) + " - " +
                "Preço antigo: R$" + precAnt.toFixed(2) + " \n"; 
    }
    alert(relat);
    //dúvida - quando eu pus 27 deu bug
}