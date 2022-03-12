function tabuada(){
    let num = window.document.getElementById('txtnum')
    let res = window.document.getElementById('res')
    if(num.value.length == 0){
        window.alert('Por Favor, Digite um número!')
    }
    else{
        let n = Number(num.value)
        let c = 1
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
    }
}