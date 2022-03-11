function contar(){
    let ini = window.document.getElementById('txtinicio')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpasso')
    let res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossivel contar!`
        alert('[ERRO] Faltam dados!')
    }
    else{
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f){
             // Contagem crescente
             for(let c = i; c <= f; c += p){
            res.innerHTML += `\u{1F449}  ${c} `
            }
        }
        else if(i > f){
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `\u{1F449}  ${c} `
            }
        }

       
    }


}

document.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        const btn = window.document.querySelector("#send")
        btn.click()
    }
})








