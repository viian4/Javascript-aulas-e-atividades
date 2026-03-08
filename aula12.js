/*let n = 8

if (n % 2 === 0) { // condiçao pra numeros pares
    n++ // pula o numero par e vai pro impar
}
for (let i = 0; i < 6; i++){ // condiçao para rodar 6 vezes
    console.log(n)
    n += 2 
}*/
const quantidade = 6

function numerosImpares(valor){
  let contar = 0
  let novoValor = valor

  while( contar < quantidade){
    if(novoValor % 2 !== 0){
        console.log(novoValor)
        contar++

    }
    novoValor++
  }
}

numerosImpares(8)