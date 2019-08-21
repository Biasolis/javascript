function vet5(){
	let logica = []
	let linguagem = []
	//entrada de dados
	for(let i=0;i<10;i++){
		logica.push(Number(prompt("Codigo do aluno")))
	}
	for(let i=0;i<5;i++){
		linguagem.push(Number(prompt("Codigo do aluno")))
	}
	var interseccao = []
	for(let i=0;i<10;i++){
		if (linguagem.indexOF(log[i] =! -1)){
			interseccao.push(log[i])
		}
	}
	alert(interseccao)
}