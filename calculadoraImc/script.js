
const calcular = document.getElementById("calcular")



const result = () => {
  const nome = document.getElementById("nome").value
  const altura = document.getElementById("altura").value
  const peso = document.getElementById("peso").value
  const resultado = document.getElementById("resultado")
  const calcImc = (peso / (altura * altura)).toFixed(2);

  if (nome !== "" && altura !== "" && peso !== "") {
    resultado.innerHTML = `Olá ${nome}, Seu IMC é: ${calcImc}.`
  } else {
    resultado.textContent = "Preencha todos os campos , por favor!"
  }
  if (calcImc < 16) {
    resultado.innerHTML += " Você está com Baixo peso Muito Grave ."
  } else if (calcImc <= 16.99) {
    resultado.innerHTML += " Você está com Baixo peso Grave."
  } else if (calcImc <= 18.49) {
    resultado.innerHTML += " Você está com Baixo peso."
  } else if (calcImc <= 24.99) {
    resultado.innerHTML += ` Você está com Peso Normal.`
  } else if (calcImc <= 29.99) {
    resultado.innerHTML += " Você está Acima do Peso."
  } else if (calcImc <= 34.99) {
    resultado.innerHTML += " Você está com Obesidade grau |."
  } else if (calcImc <= 39.99) {
    resultado.innerHTML += " Você está  com Obesidade grau ||."
  } else if (calcImc > 40) {
    resultado.innerHTML += " Você está  com Obesidade grau |||(Obesidade Mórbita)."
  }
}

