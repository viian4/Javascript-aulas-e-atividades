process.stdin.setEncoding('utf8')

function contarCaracteres(valor){
    const removeEnter = valor.replace('\n', '') //remove a leitura do enter do teclado 
    const split = removeEnter.split(' ') //quebra a string qnd houver um espaço
    let retorno = '' // retorna para uma palavra vazia

    for(let i = 0; i < split.length; i++){ // split.length = string juntamente com seu valor ex "I" 1
        if(i === 0){// “se eu estiver na primeira posição do array”
            retorno = `${split[i].length}` //o retorno recebe só o tamanho dela (1)
        } else{
            retorno = `${retorno}-${split[i].length}`//pega o que já tinha em retorno e acrescenta: -
        }

    }
    return retorno
}

process.stdin.on('data', function(data) {
     console.log(contarCaracteres(data))
     
    if(data == 0){
        process.stdin.pause()
    }

   
})