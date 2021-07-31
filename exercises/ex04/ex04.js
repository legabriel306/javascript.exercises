function contar() {
    let res = document.querySelector('div#res')
    let inicio = Number(document.querySelector('input#inicio').value)
    let fim = Number(document.querySelector('input#fim').value)
    res.innerHTML = `<h2>Contando!...</h2>`
    if (inicio < fim) {
        res.innerHTML += `<p>`
        for (let i = inicio; i <= fim; i++){
            res.innerHTML += `${i}... ` 
        }
        res.innerHTML += `</p>`
    } else {
        res.innerHTML += `<p>`
        for (let i = inicio; i >= fim; i--){
            res.innerHTML += `${i}... ` 
        }
        res.innerHTML += `</p>`
    }
}