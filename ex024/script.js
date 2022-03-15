function parimpar(valor){
    if(valor % 2 == 0){
        return 'Par'
    }
    else if(valor % 2 == 1){
        return 'ímpar'
    }
}

console.log(`${parimpar(4)}`)