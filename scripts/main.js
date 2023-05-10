var helloWorld = 'Olá mundo!' // escopo global
console.log(helloWorld)

var helloWorld = 'Olá mundo, de novo?' // redeclaracao de variavel
console.log(helloWorld)

helloWorld = 'Olá mundo, será que isto tá certo?' //reatribuicao de variavel
console.log(helloWorld)

if (true) {
    // redeclaracao do var afetando escopo global
    var endereco = 'Rua Dona Maria'
}

console.log('endereco:\n', endereco)

if (true) {
    let nomeInstituicao = 'Coderhouse Brasil'
    console.log(nomeInstituicao)

    nomeInstituicao = 'Coderhouse' //reatriuca
    console.log(nomeInstituicao)
}

if (true) {
    const pais = 'Brasil'
    console.log(pais)
}

nomePessoaAluna = 'Tamires'
console.log('nomePessoaAluna: ', nomePessoaAluna)

var nomePessoaAluna;

// comentario de linha unica
/*
    este eh um comentario de
    multiplas linhas
*/

function media(nota1, nota2, nota3) {
    const calculoMedia = (nota1 + nota2 + nota3) / 3
    
    if (calculoMedia < 6) {
        console.log('Sua nota não foi suficiente para aprovação, te vemos na recuperação')
    } else {
        console.log('Parabéns, aprovado!')
    }
    console.log('Sua nota foi ' + calculoMedia)
    return calculoMedia
}

media(4, 9, 2)

function subtrair(num1, num2) {
    if (num1 < num2) {
        console.error('Não foi possível subtrair')
    } else {
        console.log(num1 - num2)
        return num1 - num2
    }
}

subtrair(5, 2)

// Arrays
const pessoas = ['Allan', 'Tamires', 'Breno', 'Gabriel']

console.log(pessoas[2])
// metodos de array
pessoas.push('Jhonatan')
pessoas.pop()
pessoas.shift()
pessoas.unshift('Mateus')

console.log(pessoas)

// Objeto
let xicara = {
    cor: 'preta',
    forma: 'redonda',
    peso: 5,
    capacidade: 200,
    fabricacao: {
        lote: '828386187263',
        estado: 'SP',
    }
}

let xicara2 = {
    cor: 'branca',
    forma: 'quadrada',
    peso: 5,
    capacidade: 200,
    fabricacao: {
        lote: '828386187263',
        estado: 'RJ',
    }
}

console.log(xicara.fabricacao.lote)

const xicaras = [xicara, xicara2]
console.log(xicaras)

let aluno1 = {
    nome: "Maria",
    idade: 15,
    nota: 9
};

let aluno2 = {
    nome: "João",
    idade: 16,
    nota: 8
};
//              0        1 ...
let alunos = [aluno1, aluno2];

console.log(alunos[0]);
console.log(alunos[1].nome);


// outro array de objetos
const salas = [
    {
        codigo: 'CO-01',
        status: 'disponivel'
    },
    {
        codigo: 'CO-02',
        status: 'indisponivel'
    }
]
// console.log(salas[1].status)

//                           0            1           2        3
const alunosCoderhouse = ['Jhonatan', 'Wellington', 'Yann', 'Breno'] // length = 4

// for (let indice = 0; indice < alunosCoderhouse.length; indice++) {
//     console.log('O aluno é ' + alunosCoderhouse[indice])
// }

// enquanto
// let indice = 0
// while (indice < alunosCoderhouse.length) {
//     // execute isso...
//     console.log('O aluno é ' + alunosCoderhouse[indice])
//     indice++ // incremento ou decremento
// }


// faça... enquanto
let indice = 0;
do {
    console.log('O aluno é ' + alunosCoderhouse[indice]);
    indice++
} while (indice < alunosCoderhouse.length);

var numeros = [1, 2, 3, 4, 5, 6];

function somatorio(numeros) {
    var resultado = 0;

    numeros.forEach((numero, indice) => {
        console.log('Estou passando pelo indíce ', indice)
        resultado = resultado + numero;
    });

    console.log(resultado);
}

somatorio(numeros);

// function ola() {
//     console.log('ola mundo!')
// }
const ola = () => {
    console.log('Olá mundo!')
}

ola()
