$(document).ready(function () {
  $('header button').click(function () {
    $('form').slideDown();

  })

  $('#botao-cancel').click(function () {
    $('form').slideUp();
  })

  $('form').on('submit', function (e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li style="display:none"> </li>');
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
    $(`<div class="overlay-imagem-link">
    <a href="$(enderecoDaNovaImage)" target="_blank" title="Ver imagem em tamanho real">
    Ver imagem em tamanho real
    </a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn();
    $("#endereco-imagem-nova").val(' ')


  })

})