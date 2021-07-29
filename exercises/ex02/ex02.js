function finalizar() {
    let res = document.querySelector('section#res');
    let emprestimo = Number(document.querySelector('input#emprestimo').value);
    let parcela = Number(document.querySelector('input#parcela').value);
    let juros = Number(document.querySelector('input#juros').value);
    let aumento = emprestimo * ((juros / 100) + 1);
    let total = aumento / parcela;
    res.innerHTML = `Vai pagar <strong>${parcela}</strong> parcelas de <strong>R$${total}</strong>`;
}