const gerarCadastro = () => {
    let form = document.querySelector('div#form');
    let totalNum = Number(document.querySelector('input#totalNum').value);
    form.innerHTML = '<h2>Escreva abaixo os números:</h2>';
    for (let i = 0; i < totalNum; i++) {
        form.innerHTML += `<p><label for="num${i}"> Número${i+1}: </label><input type="number" name="num${i}" id="num${i}"></p>`;
    }
    form.innerHTML += `<input type="button" value="Cadastrar" onclick="cadastrarNumeros()">`;
};