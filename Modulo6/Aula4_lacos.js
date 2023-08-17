let nomes = ["Maria", "Jose", "João"]

/* for (let i = 0; i < nomes.length; i++) {
  console.log("O nome é " + nomes[i])
}  */

for (indiceAtual in nomes){
  console.log("O nome é: " + nomes[indiceAtual])
} 

let saudacoes = 0;
while (saudacoes < nomes.length) {
  console.log("O nome é: " + nomes[saudacoes]);
  saudacoes++
}