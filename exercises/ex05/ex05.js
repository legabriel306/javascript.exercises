function gerarFormulario() {
    let form = document.querySelector('div#form');
    form.innerHTML = ``
    let numAlunos = Number(document.querySelector('input#numAluno').value);
    form.innerHTML = `<h2>Cadastre os alunos abaixo</h2>`;
    for (let i = 1; i <= numAlunos; i++) {
        form.innerHTML += `<p>
        <label for="aluno${i}"><strong>Aluno ${i}:</strong> </label></p>
        <p><label for="nome${i}">Nome do aluno: </label><input type="text" name="nome${i}" id="nome${i}"></p>
        <p><label for="media${i}">Média do aluno: </label><input type="number" name="media${i}" id="media${i}">
        </p>`;
    }
    form.innerHTML += '<input type="button" value="Cadastrar" onclick="cadastrar()">';
}

function cadastrar() {
    let res = document.querySelector('div#res');
    res.innerHTML = "";
    let numAlunos = Number(document.querySelector('input#numAluno').value);
    let nome = [];
    let media = [];
    for (let i = 0; i < numAlunos; i++){
        nome[i] = String(document.querySelector(`input#nome${i+1}`).value);
        media[i] = Number(document.querySelector(`input#media${i+1}`).value);
    }
    let maior = calcularMaiorMedia(media);
    res.innerHTML = `<p>A maior nota foi de <strong>${nome[maior]}</strong>, com a média de <strong>${media[maior].toFixed(2)}</strong></p>`
}
function calcularMaiorMedia(media) {
    let notaMaior = '';
    let maiorIndex = '';
    for (let i = 0; i < media.length; i++) {
        if (media[i] > notaMaior) {
            notaMaior = media[i];
            maiorIndex = i;
        }
    }
    return maiorIndex;
}