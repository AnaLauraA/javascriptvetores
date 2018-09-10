
var vet = [];
function cadastra() {
    var objeto = new Object();
    objeto.venda = document.getElementById("vendas").value;
    objeto.comissao = document.getElementById("comi").value;
    objeto.nome = document.getElementById("nome").value;
    objeto.valor = 0;
    vet.push(objeto);
    document.getElementById("saida").innerHTML = "Inserido com sucesso";
}
function relatorio() {
    var i = 0;
    //montar o vetor de valores recebidos
    for(i=0;i<vet.length;i++) {
        vet[i].valor = (vet[i].venda*vet[i].comissao)/100;
    }
    //percorre os vetores e monta relatório
    var aux = ""
    for(i=0;i<vet.length;i++) {
        aux += "<br/>" + vet[i].nome + " receberá " + vet[i].valor;
    }
    document.getElementById("saida").innerHTML = aux;
}
function totalVendas(){
    var total = 0;
    var i;
    for(i=0;i<vet.length;i++){
        total += Number(vet[i].venda);
    }
    document.getElementById("saida").innerHTML = "Total " + total;
}
function maiorVenda(){
    var maior = vet[0].valor;
    var posicao = 0; //guarda posicao do maior
    var i;
    for(i=1;i<vet.length;i++){ //começa do 1 pois var maior já está no valores[0]
         if(vet[i].valor > maior){
             maior = vet[i].valor;
             posicao = i;
         }
    }
    document.getElementById("saida").innerHTML = vet[posicao].nome;
}
function menorVenda(){
    var menor = vet[0].valor;
    var posicao = 0; //guarda posicao do menor
    var i;
    for(i=1;i<vet.length;i++){ //começa do 1 pois var maior já está no valores[0]
         if(vet[i].valor < menor){
             menor = vet[i].valor;
             posicao = i;
         }
    }
    document.getElementById("saida").innerHTML = vet[posicao].nome;
}