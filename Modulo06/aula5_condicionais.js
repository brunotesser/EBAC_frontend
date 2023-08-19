// Comparadores: < (menor); >= (maior ou igual), == (é igual), = (atribuição), === (é igualdade tbm com tipo)
// !== (é diferente do tipo x para tipo y?), && (tipo x E tipo y), || (tipo x OU tipo y).
// !false (negação do false é true) !true (negacao do true é false)

let idade = prompt("Digite a sua idade:")
idade = parseInt(idade)

if (idade >= 18) {
  console.log("POde entrar");
} else {
  console.log("Não pode entrar, menor de idade")
}

let idade1 = prompt("Digite a sua idade:");
idade1 = parseInt(idade1);
let estaAcompanhada = true; //Aqui você muda para true se estiver acompanhada, e false se não estiver.

if (idade1 >= 18) {
  console.log("POde entrar");
} else if (estaAcompanhada == true) {
  console.log("POde entrar, pois está acompnhada");
} else {
  console.log("Não pode entrar, menor de idade")
}

