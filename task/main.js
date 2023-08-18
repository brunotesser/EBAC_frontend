$(document).ready(function () {
  $('#taskForm').submit(function (e) {
    e.preventDefault();
    const taskName = $('#taskName').val();
    if (taskName) {
      $('#taskList').append(`<li>${taskName}</li>`);
      $('#taskName').val('');
    }
  });

  $(document).on('click', 'li', function () {
    $(this).toggleClass('completed');
  });
});
