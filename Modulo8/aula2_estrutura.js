const form = document.getElementById("form-atv");
form.addEventListener("submit", function (e) {
  e.preventDefault();


  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");

  alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);
});

