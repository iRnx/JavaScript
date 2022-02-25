const alunos = ['Itachi', 'Minato', 'Pain', 'obito']
const medias = [10, 7, 9, 6]

const listaDeNotasEAlunos = [alunos, medias]

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return `${listaDeNotasEAlunos[0][indice]}, Sua média é: ${listaDeNotasEAlunos[1][indice]}`
    } else {
        return `Aluno não esta cadastrado Erro`
    }
}

console.log(exibeNomeNota('Pain'))

console.log(`${alunos.includes('Renan')}`) // Como Renan não existe, Retornará false

console.log(`${alunos.indexOf('Renan')}`) // Como Renan não existe, Retornará -1