/* CONSOLE PÁGINA aula2_seletore.html

let nomeBeneficiario = document.getElementById("nome-beneficiario")

nomeBeneficiario (irá entregar isso para nós)
nomeBeneficiario.value = "Bruno Vinicius"

nomeBeneficiario.type (mostra o tipo, no caso texto)
nomeBeneficiario.id (mostra o ID)
nomeBeneficiario.required (mostra se é ou não obrigatório)
nomeBeneficiario.placeholder (acessar o placeholder)


*/

nomeBeneficiario.value = "Bruno Vinicius"

let valorDeposito = document.getElementById("valor-deposito")
valorDeposito.value = 5;

// Para criar uma validação customizado no caso de um nome completo, no caso minimo 2 sobrenomes usamos:

nomeBeneficiario.value.split('').length > 2 

// Para desabilitar um botão através do JS

document.getElementById('btn-depositar').disabled = true

// Para desabilitar o botão através do JS no caso se a condição de que (o nome for < 3 ele sera desabilitador

document.getElementById('btn-depositar').disabled = nomeBeneficiario.value.split('').length < 3 
