function gerarSequencia() {
    let res = document.querySelector('div#res');
    let numTermo = Number(document.querySelector('input#numTermo').value);
    res.innerHTML = '';
    let fibonacci = [0, 1];
    for (let i = 1; i <= numTermo; i++) {
        fibonacci[i+1] = fibonacci[i] + fibonacci[i-1];
    }
    res.innerHTML = `<h2>A sequência com ${numTermo} termos é</h2>`;
    res.innerHTML += `<p>`;
    for (let i = 0; i < fibonacci.length; i++) {
        res.innerHTML += `<strong>... ${fibonacci[i]}</strong> `;
    }
    res.innerHTML += `</p>`;
}