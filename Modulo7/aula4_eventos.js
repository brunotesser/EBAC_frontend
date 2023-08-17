/* Console

*/
const form = document.getElementById("form-deposito");



//aqui estamos criando uma função para validar nome, one o nome para ser valido tem que ser maior ou igual a 2
function validaNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(' ');
  return nomeComoArray.length >= 2;
}




// Aqui estamos dizendo que toda vez que o EVENTO submit do form for apertado ele vai fazer uma função que estamos criando evento (e)
// então não teremos mais esse reload na hora do SUBMIT
form.addEventListener("submit", function (e) {
  let formValido = false;
  e.preventDefault();

  const nomeBeneficiario = document.getElementById("nome-beneficiario");
  formValido = validaNome(nomeBeneficiario.value)
  const numeroContaBeneficiario = document.getElementById("numero-conta");
  const valorDeposito = document.getElementById("valor-deposito");
  const mensagemSucesso = `Montade de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b>  - conta: <b>${numeroContaBeneficiario.value}</b>`;
  if (formValido) {     //aqui vai retornar um true or false
    document.querySelector('sucess-message').innerHTML = mensagemSucesso;  //aqui é para escrever um conteúdo HTML no JS
  } else {
    alert("O nome não está completo");
  }
})

console.log(form);