var num = [6, 2, 1, 9, 8]

for(pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}