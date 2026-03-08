function multiplos13(valor1, valor2){
    let maior = 0 //100
    let menor = 0 //200
    let soma = 0
    if (valor1 > valor2){ //se valor 1 for maior que valor 2
        maior = valor2 //200
        menor = valor1 //100
    } else{
        maior = valor2
        menor = valor1
    }
    
    for (menor; menor <= maior; menor++) {
        if(menor % 13 !== 0){
            soma += menor //let soma = o
            //soma = soma + menor
        }
    }
    return soma;
}
console.log(multiplos13(100, 200))

/*soma = 0

numero = 10
soma = 0 + 10 → 10

numero = 11
soma = 10 + 11 → 21

numero = 12
soma = 21 + 12 → 33 */