var ListadePecas = ["Amortecedor","Motor","Filtro de Ar", "Bobina", "Filtro de Oleo","Ventuinha","Pastilha de Freio","Correia dentada","Bicos injetores", "luz de freio"]

let peso = 100
if (peso <100){
    console.log("A peça deve pesar 100 ou mai gramas")
} else {
    console.log("A peça tem o peso adequado")
}

if (ListadePecas.lengh <10) {
    console.log("Ainda tem espaço")
} else {
    console.log("Não tem mais espaço")
}

let nomePeca = "Disco de Freio"
if (nomePeca.length > 3){
    console.log("Nome da Peca esta Adequado")

} else if (nomePeca ==0) {
    console.log("Nome da Peca nao pode ser vazio")
}else {
    console.log("Nome da Peca precisa ter pelo menos 3 caracteres")
}