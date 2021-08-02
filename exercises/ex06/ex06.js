function gerarSequencia() {
    let res = document.querySelector('div#res');
    let numTermo = Number(document.querySelector('input#numTermo').value);
    res.innerHTML = '';
    let fibonacci = [0, 1];
    for (let i = 1; i <= numTermo; i++) {
        fibonacci[i+1] = fibonacci[i] + fibonacci[i-1];
    }
}