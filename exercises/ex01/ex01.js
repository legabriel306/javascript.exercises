function finalizar() {
    let res = document.querySelector('section#res')
    let anoNasc = Number(document.querySelector('input#ano-nascimento').value)
    let anoAtual = Number(document.querySelector('input#ano-atual').value)
    let idade = anoAtual - anoNasc
    if (idade == 1 || idade == 0) {
        res.innerHTML = `<p>Você tem <strong>${idade} ano</strong> de idade</p>`
    } else if(idade < 0){
        alert('[ERRO]Idade inválida, verifique os dados')
    } else {
        res.innerHTML = `<p>Você tem <strong>${idade} anos</strong> de idade</p>`
    }
}