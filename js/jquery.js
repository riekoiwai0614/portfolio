$(function() {
	////*メニュー*////
 $('.navbar_toggle').on('click', function () {
  $(this).toggleClass('open');
  $('.menu').toggleClass('open');
});
 $('.menu ul li a[href]').on('click', function() {
  $('.navbar_toggle').trigger('click');
});
 $(".menu ul li").each(function(i){
	 $(this).delay(400*i).animate({'left':'0'});
 });
 });

////*作品のサムネイル*////
$(function(){
	$('.thumbnails img').click(function(){
  var $thisImg = $(this).attr('src');
  var $thisAlt = $(this).attr('alt');
  $('.mainImage img').attr({src:$thisImg,alt:$thisAlt});
});
$('.others li a').click(function() {
  var imgSrc = $(this).children().attr('src');
  $('.bigimg').children().attr('src', imgSrc);
  $('.modal').fadeIn();
  return false
});

$('.close-btn').click(function() {
  $('.modal').fadeOut();
  return false
});
$('.modal').click(function() {
  $('.modal').fadeOut();
  return false
});
});	


////*メールフォーム*////


//https://www.sidethree.co.jp/blog/memo/201610-1.html