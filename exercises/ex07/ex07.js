const gerarCadastro = () => {
    let form = document.querySelector('div#form');
    let totalNum = Number(document.querySelector('input#totalNum').value);
    form.innerHTML = '<h2>Escreva abaixo os números:</h2>';
    for (let i = 0; i < totalNum; i++) {
        form.innerHTML += `<p><label for="num${i}"> Número${i+1}: </label><input type="number" name="num${i}" id="num${i}"></p>`;
    }
    form.innerHTML += `<input type="button" value="Cadastrar" onclick="cadastrarNumeros()">`;
};
const cadastrarNumeros = () => {
    let res = document.querySelector('div#res');
    res.innerHTML = '';
    let totalNum = Number(document.querySelector('input#totalNum').value);
    let numeros = [];
    for (let i = 0; i < totalNum; i++) {
        numeros[i] = Number(document.querySelector(`input#num${i}`).value); 
    }
    let soma = calcularSoma(numeros);
    let media = calcularMedia(numeros);
    let divCinco = calcularDivCinco(numeros);
    let nulo = totalNulo(numeros);
    let somPar = calcularSomaPares(numeros);
    
    res.innerHTML += `<p>A soma esntre os valores é <strong>${soma}</strong></p> `;
    res.innerHTML += `<p>A media entre os valores é <strong>${media}</strong></p>`;
    res.innerHTML += `<p>Valores divisiveis por cinco: <strong>${divCinco}</strong></p>`;
    res.innerHTML += `<p>Valores Nulos: <strong>${nulo}</strong></p>`;
    res.innerHTML += `<p>A soma dos valores pares é <strong>${somPar}</strong></p>`; 
};
function calcularSoma(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i]; 
    }
    return total;
}
function calcularMedia(array) {
    let soma = calcularSoma(array);
    let media = soma / array.length;
    return media;
}
function calcularDivCinco(array) {
    let numDivCinco = 0;
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 5) == 0) {
            numDivCinco += 1;
        }
    }
    return numDivCinco;
}
function calcularSomaPares(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) == 0) {
            total += array[i];
        }
    }
    return total;
}