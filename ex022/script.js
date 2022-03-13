var num = [40, 1, 19, 22]
num.push(2) // adiciona 1 no final
num.sort(function(a,b){return a-b}) // só assim para o sorte ordenar do menor pro maior...
console.log(num)

console.log(`O Array tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

var pos = num.indexOf(6)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}
else {
    console.log(`O valor 2 esta na posição ${pos}`)
}
