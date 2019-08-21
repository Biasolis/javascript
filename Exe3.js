function vet3(){
	let codigos = [] //vetor de codigos
	let estoque = [] //vetor de estoque
	let i

	for(i=0;i<10;i++){
		codigo.push(Number(prompt("Informe o codigo do produto")));
		estoque.push(Number(prompt("Informe a qtde do produtol")));

	}
	//Procedimento
	let cliente = Number(prompt("Informe o codigo do cliente"));
	while (cliente ! = 0){
		let codProduto = Number(prompt("Informe o código do produto"));
		let qtdeProduto = Number(prompt("Informe a qtde de produto"));
		if ( auxPosicao == -1){ // não existe
			alert("Produto não existente")
		}
		else{
			if (estoque[auxPosicao] - qtdeProduto >= 0){
				estoque[auxPosicao] = estoque[auxPosicao] - qtdeProduto
				alert("Produto comprado com sucesso")
			}
		else{
			alert("Não tem estoque")
			}
		}
		cliente = Number(prompt("Informe um novo código do cliente." + "Digite 0 para encerrar"))
	}
	//saida de dados
	alert("Estoque atualizado" + estoque);
}
