let nome = prompt("Digite seu nome: ");

function dizOi(nomeUsuario){
  alert("Olá " + nomeUsuario)

} dizOi("Maria");

function calculaIdade(anoNascimento){
  let idade = 2022 - anoNascimento;
  return idade;
}

let anoNascimento = prompt("Em que ano você nasceu?");
anoNascimento = parseInt(anoNascimento);

alert("Você tem: " + calculaIdade(anoNascimento))


