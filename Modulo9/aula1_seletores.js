$(document).ready(function () {
  $('header button').click(function () {
    $('form').slideDown();

  })

  $('#botao-cancel').click(function(){
    $('form').slideUp();
  })

  $('form').on('submit', function (e) {
    console.log("submit");
    e.preventDefault();
  })

})