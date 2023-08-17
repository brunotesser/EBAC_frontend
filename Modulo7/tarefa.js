/*

TAREFA:

1- Crie um formulário HTML que possua dois campos numéricos, campo A e campo B e um botão para submeter o formulário.
2- Crie uma validação no JAVASCRIPT, onde o formulário será válido caso o número B seja maior que o número A.
3- Exiba uma mensagem positiva quando o formulário for válido e uma mensagem negativa quando for inválido.
4- Suba no GITHUB no repositório do curso em uma branch chamada exercicio_html_js.
5- Copiar o LINK e mandar na plataforma EBAC

GOOD LUCK

*/

const form = document.getElementById("formulario");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const message = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const resultA = Number(campoA.value);
  const resultB = Number(campoB.value);

  if (resultB > resultA) {
    message.innerHTML = "Formulário válido!";
  } else {
    message.innerHTML = "Formulário inválido: o número do campo B deve ser maior que do campo A";
  }
});










