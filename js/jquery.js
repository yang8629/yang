$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

	$('.day--1 a').click(function(){
		$('.ticket--1').hide();
		$($(this).attr('href')).show();
	});

	$('.day a').click(function(){
		$('.ticket').hide();
		$($(this).attr('href')).show();
	});

	$(".flip--1").click(function(){
    $(".panel--1").slideToggle();
		$(this).toggleClass("flip--background");
  });

	$(".flip--2").click(function(){
    $(".panel--2").slideToggle("fast");
		$(this).toggleClass("flip--background");
  });

	$(".flip--3").click(function(){
    $(".panel--3").slideToggle();
		$(this).toggleClass("flip--background");
  });
});
