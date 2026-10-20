const campoValor = document.getElementById("valor");

const moedas = [
  { taxa: document.getElementById("taxa-usd"), resultado: document.getElementById("res-usd") },
  { taxa: document.getElementById("taxa-eur"), resultado: document.getElementById("res-eur") },
  { taxa: document.getElementById("taxa-zar"), resultado: document.getElementById("res-zar") }
];

function calcular() {
  const valor = parseFloat(campoValor.value);

  moedas.forEach(function (moeda) {
    const taxa = parseFloat(moeda.taxa.value);

    if (isNaN(valor) || isNaN(taxa) || taxa <= 0) {
      moeda.resultado.textContent = "—";
    } else {
      moeda.resultado.textContent = (valor / taxa).toLocaleString("pt-PT", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  });
}

campoValor.addEventListener("input", calcular);
moedas.forEach(function (moeda) {
  moeda.taxa.addEventListener("input", calcular);
});

document.getElementById("limpar").addEventListener("click", function () {
  campoValor.value = "";
  moedas.forEach(function (moeda) {
    moeda.taxa.value = "";
  });
  calcular();
});
