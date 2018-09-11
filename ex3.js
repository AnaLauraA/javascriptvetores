function calcula() {
    var vCodigo = []; //vetor de códigos
    var vEstoque = []; //vetor de estoque
    //entrada de dados
    for(var i=0;i<5;i++) {
        vCodigo.push(prompt("Informe código"));
        vEstoque.push(parseInt(prompt("Informe estoque")));

    }
    //realizar a compra
    var cliente, codigo, qtde;
    cliente = prompt("Código do cliente");
    while (cliente != 0) {
        codigo = prompt("Código do produto");
        qtde = parseInt(prompt("Qtde do produto"));
        //procura o codigo do produto no vetor de códigos
        var posicao = vCodigo.indexOf(codigo);
        if (posicao != -1){
            if (vEstoque[posicao] >= qtde){ //tem em estoque
                //atualiza estoque
                vEstoque[posicao] = vEstoque[posicao] - qtde;
                alert("Compra com sucesso");
            }
            else {
                alert("Não tem em estoque");
            }
        }
        else {
            alert("Produto não existe");
        }
        cliente = prompt("Código do novo cliente");
    }
    alert(vEstoque);
    
}