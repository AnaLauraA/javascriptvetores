function calcula() {
    var nomes = [];
    var percsComissao = [];
    var valVendas = [];
    var valsComissao = [];
    var relat = "";
    var somaValVend = 0;

    for(var i = 0; i < 10; i++) {
        alert((i+1) + "º vendedor");
        nomes.push(prompt("Nome:"));
        valVendas.push(parseFloat(prompt("Total de vendas:")));
        percsComissao.push(parseFloat(prompt("Porcentagem da comissão:")));
        valsComissao.push(valVendas[i] * percsComissao[i] * 0.01);
    }
    //Dúvida - É necessário sempre o push? Existe outra forma?
    var maiorVal = valsComissao[0];
    var menorVal = valsComissao[0];

    for(var i = 0; i < nomes.length; i++) {
        relat += nomes[i] + " - Valor a receber: R$" + valsComissao[i] + "\n";
        somaValVend += valVendas[i];
        if(valsComissao[i] > maiorVal) {
            maiorVal = valsComissao[i];
        }
        if(valsComissao[i] < menorVal) {
            menorVal = valsComissao[i];
        }
    }
    alert(relat);
    alert("Total de vendas: R$ " + somaValVend);
    alert(nomes[valsComissao.indexOf(maiorVal)] + " receberá o maior valor, R$ " + maiorVal);
    alert(nomes[valsComissao.indexOf(menorVal)] + " receberá o menor valor, R$ " + menorVal);
}