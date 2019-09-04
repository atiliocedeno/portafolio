$(document).ready(function() {
  console.log("ready!");
  $(function() {
    $('[data-toggle="tooltip"]').tooltip()

  })
  $('.carousel').carousel({
    interval: 2000
  })


});
