//Exercício 1
var vet = [];
var pares = [];
var impares = [];
function ex1_cadastra() {
    vet.push(parseInt(document.getElementById("parOuImpar").value));   
}
function ex1_resposta() {
    for(var i=0;i<vet.length;i++){
        if (vet[i] % 2 == 0) {
            pares.push(vet[i]);
        } else {
            impares.push(vet[i]);
        }
    }
    document.getElementById("rPares").innerHTML = "Números pares: " +
        pares + ". Quantidade de números pares: " + pares.length;
    document.getElementById("rImpares").innerHTML = "Números ímpares: " +
        impares + ". Quantidade de números impares: " + impares.length;
}

//Fim exercício 1
function vet2() {
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
    alert("Múltiplo de 2 " + mult2 + ". Múltiplos de 3" + mult3 + "Múltiplos de 2 e 3" + mult2e3);
}

function vet4() {
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

function vet5() {
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
//splice(quantElem, pos) -> retira um elem na pos e retorna os elem que sobraram
function vet6() {
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
// exercicio 6 versao daniel
var vendas = []; //guarda as vendas
var comissoes = []; //guarda as comissões
var nomes = []; //guarda os nomes
var valores = []; //guardas os valores a receber
function cadastra() {
    vendas.push(document.getElementById("vendas").value);
    comissoes.push(document.getElementById("comi").value);
    nomes.push(document.getElementById("nome").value);
    document.getElementById("saida").innerHTML = "Inserido com sucesso";
}
function relatorio() {
    var i = 0;
    //montar o vetor de valores recebidos
    for(i=0;i<vendas.length;i++) {
        valores.push(vendas[i]*comissoes[i]/100);
    }
    //percorre os vetores e monta relatório
    var aux = ""
    for(i=0;i<vendas.length;i++) {
        aux += "<br/>" + nomes[i] + " receberá " + valores[i];
    }
    document.getElementById("saida").innerHTML = aux;
}
function totalVendas(){
    var total = 0;
    var i;
    for(i=0;i<vendas.length;i++){
        total += Number(vendas[i]);
    }
    document.getElementById("saida").innerHTML = "Total " + total;
}
function maiorVenda(){
    var maior = valores[0];
    var posicao = 0; //guarda posicao do maior
    var i;
    for(i=1;i<valores.length;i++){ //começa do 1 pois var maior já está no valores[0]
         if(valores[i] > maior){
             maior = valores[i];
             posicao = i;
         }
    }
    document.getElementById("saida").innerHTML = nomes[posicao];
}
function menorVenda(){
    var menor = valores[0];
    var posicao = 0; //guarda posicao do menor
    var i;
    for(i=1;i<valores.length;i++){ //começa do 1 pois var maior já está no valores[0]
         if(valores[i] < menor){
             menor = valores[i];
             posicao = i;
         }
    }
    document.getElementById("saida").innerHTML = nomes[posicao];
}
// fim exercício 6

//Exercício 6 versão com objetos




function vet7() {
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

function vet8() {
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
    //dúvida - é melhor declarar uma variável com o índice ou assim está bom?
}

function vet9() {
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

function vet3() {
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

function netflix() {
    //declaração das variáveis
    var clientes = [];
    var alugueis = [];
    var i;
    //entrada de dados
    for(i=0;i<7;i++){
        clientes.push(prompt("Nome do cliente"));
        alugueis.push(prompt("Qtde para locação"));
    }
    //processamento
    var saida = "";
    for(i=0;i<7;i++){
        saida += clientes[i] + " tem direito a " + parseInt(alugueis[i]/10) + "<br/>";
    }
    var elemP = document.createElement("p");
    document.getElementById("netflix").appendChild(elemP).setAttribute("id", "saida");
    document.getElementById("saida").innerHTML = saida;
}

var v1 = [];
var v2 = [];
function adicionaV1(){
    v1.push(document.getElementById("v1").value);
    alert("Inserido com sucesso");
    document.getElementById("v1").value = "";
}
function adicionaV2(){
    v2.push(document.getElementById("v2").value);
    alert("Inserido com sucesso");
    document.getElementById("v2").value = "";
}
function calcula(){
    // cria v3
    var i = 0;
    var somaV2 = 0;
    //soma elementos de v2
    while(i < 5){
        somaV2 = somaV2 + v2[i];
        i++;
    }
    //insere em v3
    i = 0;
    while(i < 10){
        if(v1[i] % 2 == 0){
            v3.push(v1[i] + somaV2);
        }
        i++;
    }
    //cria v4
    i = 0;
    while(i < 10){
        if(v2[i] % 2 == 1){
            var j = 0;
            while(j < 5){
                if(v2[i] % v3[i] == 0){ //é divisor
                    conta++;
                }
                j++;
            }
            v4.push(conta);
            conta = 0;//para o próximo
        }
        i++;
    }
}