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
        saida += clientes[i] + " tem direito a " + parseInt(alugueis[i]/10) + " locações grátis<br/>";
    }
    var elemP = document.createElement("p");
    document.getElementById("netflix").appendChild(elemP).setAttribute("id", "saida");
    document.getElementById("saida").innerHTML = saida;
}