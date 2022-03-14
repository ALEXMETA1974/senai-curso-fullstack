//Criar um laçao para exibir se o número é impar ou par

let  numeros = 20

for (contador =0; contador <= numeros; contador = contador + 3) {
    // modulo é o resto da divisão
    if (contador % 2 == 1) {
        console.log(contador+ " é impar")
    } else {
        console.log(contador+ " é par")
    }
}