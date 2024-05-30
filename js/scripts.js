/* -------------------------------------------- */
/*                 PARALLAX PAGE               */
/* ------------------------------------------ */
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['1Kiselev', '2Price', '3Photo', '4Contacts'],
        menu: '#menu',
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Главная', 'Цены', 'Фото', 'Контакты']
    });
});


$(document).ready(function() {
  $( ".item_hover:nth-child(1)" ).addClass('hovered');
  $( ".item_hidden:nth-child(2)" ).show();
  $( ".item_hover" ).hover(
    function() {
      $( ".item_hover" ).removeClass('hovered');
      $( ".item_hidden" ).hide();
      $( this ).next().show();
    }, function() {
      $( this ).next().hide();
    }
  );
  $( ".item_hover" ).mouseleave(function() {
    $( ".item_hover:nth-child(1)" ).addClass('hovered');
    $( ".item_hidden:nth-child(2)" ).show();
  });
});


