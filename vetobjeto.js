function funcao(){
    // cria vetor
    var vet = []
    // cria objeto
    var objeto = {}
    // cria produtos
    for(var i=0;i<5;i++){
        objeto.codigo = Number(prompt("Informe o codigo"))
        objeto.nome = prompt("Informe o nome")
        objeto.qtde = Number(prompt("Informe a qtde"))
        objeto.preco = Number(prompt("Informe preço"))
        vet.push(objeto)
        alert("Produto criado com Sucesso")
    }
    var soma = 0
    for(var i=0;i<5;i++){
        
        soma = soma + vet[i].qtde
    }
    alert("Qtde" + soma)
}