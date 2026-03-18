process.stdin.setEncoding('utf8')

let maiorString = '' // maior palavra
let resultado  = [] // guarda esse resultado aqui [love, gabrielly]

function contarCaracteres(valor) {
    let retorno = ''; //vai mostrar a resposta final
    
    // trim() é essencial para remover o "Enter" do final da frase
    const textoLimpo = valor.trim();
    const split = textoLimpo.split(' '); //quebra uma string ['i','love','you']


   for (let i = 0; i < split.length; i++) { 
        // Ignora espaços vazios caso o usuário digite dois espaços sem querer
        if (split[i].length === 0) continue;

        if (retorno === '') {
            //se for a primeira palavra. recebe so o tamanho dela
            retorno = `${split[i].length}`;  // 'i' = 1
        } else {
            retorno = `${retorno}-${split[i].length}`; //junta a primeira com a proxima palavra
        }
        if(split[i].length >= maiorString.length )
            maiorString = split[i] //'love' 'tudo'
    }
    return retorno;
}

process.stdin.on('data', function(data) { //"ouve o teclado"
    // Verifica se a entrada é apenas "0" para encerrar
    if (data.trim() === '0') {
         for(let i = 0; i < resultado.length; i++){//mostra cada item
            console.log(resultado[i])
        }

        console.log(`The biggest word: ${maiorString}`)//mostra a maior palavra


    } else{
        resultado.push(contarCaracteres(data)) //se nao for digitado o zero e retorna pra função

    }

   
})


    