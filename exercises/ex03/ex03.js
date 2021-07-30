function calcular() {
    let res = document.querySelector('div#res');
    let massa = Number(document.querySelector('input#massa').value);
    let altura = Number(document.querySelector('input#altura').value);
    if (altura > 100) {
        altura = altura / 100;
    }
    res.innerHTML = "";
    let imc = massa / (altura ** 2);
    res.innerHTML = `<h2>Seu IMC é ${imc.toFixed(2)}</h2>`;
    if (imc < 18.5) {
        res.innerHTML += `<p>Você está abaixo do seu peso ideal. Abaixo de 18.5</p>`;
    } else if (imc >= 18.5 && imc < 25) {
        res.innerHTML += `<p>Parabéns! Você está no seiu peso ideal. Entre 18.5 e 24.9</p>`;
    } else if (imc >= 25 && imc < 30) {
        res.innerHTML += `<p>Você está acima do seu peso ideal (sobrepeso). Entre 25 e 29.9</p>`;
    } else if (imc >= 30 && imc < 35) {
        res.innerHTML += `<p>Você está acima do seu peso ideal (Obesidade Grau I). Entre 30 e 34.9</p>`;
    } else if (imc >= 35 && imc < 40) {
        res.innerHTML += `<p>Você está acima do seu peso ideal (Obesidade Grau II). Entre 35 e 39.9</p>`;
    } else if (imc >= 40) {
        res.innerHTML += `<p>Você está acima do seu peso ideal (Obesidade Grau III ou morbida). Acima de 40</p>`;
    }
}