$(function() {
$('li').css('width', '200px');
$('li').css('height', '50px');

$('li').mouseover(function(){
  $(this).css('opacity', '0.25');

});

$('li').mouseout(function(){
  $(this).css('opacity', '1');

});

$('a').click(function(){
  $(this).css('background-color', '#E572EE');


});

$('a').click(function(){
  $(this).text('Clicked!');
});
});
