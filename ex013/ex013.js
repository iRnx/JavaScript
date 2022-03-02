const numeros = [100, 200, 300, 400, 500, 600]

for(i = 0; i < numeros.length; i++){
    console.log(i, numeros[i])
}

console.log('---------------------------------------------------')

for(pos in numeros){
    console.log(`${Number(pos) + 1} ${numeros[pos]}`)
}
