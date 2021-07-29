function finalizar() {
    let res = document.querySelector('section#res');
    let emprestimo = Number(document.querySelector('input#emprestimo').value);
    let parcela = Number(document.querySelector('input#parcela').value);
    let aumento = emprestimo * 1.20;
    let total = aumento / parcela;
    res.innerHTML = `Vai pagar <strong>${parcela}</strong> parcelas de <strong>R$${total}</strong>`;
}