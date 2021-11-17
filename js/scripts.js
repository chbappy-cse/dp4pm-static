jQuery(window).on("scroll touchmove", function () {
	$('.header').toggleClass('header-tiny', $(document).scrollTop() > 0);
});


$(document).ready(function (e) {
	$('.navbar-toggler').on('click', function () {
		$('.navbar').toggleClass('in');
		$('html').toggleClass('no-scroll');
		$('.navbar-collapse').toggleClass('show');
		$(this).toggleClass('open');
	});

	$('.navbar ul li:has(ul)').addClass('dropdown');

	$('.navbar-collapse').on('click', '.dropdown a', function () {
		if ($(this).width() < 800) {
			if ($(this).next('ul').is(':visible')) {
				$(this).next('ul').slideUp('fast');
				$(this).removeClass('active');
			} else {
				$(this).closest('ul').children('.dropdown').children('.active').next('ul').slideUp('fast');
				$(this).closest('ul').children('.dropdown').children('.active').removeClass('active');
				$(this).next().slideToggle('fast');
				$(this).addClass('active');
			}
		}
	});

	$(".common-heading,.split-last-word").html(function () {
		var text = $(this).text().trim().split(" ");
		var last = text.pop();
		return text.join(" ") + (text.length > 0 ? " <span>" + last + "</span>" : last);
	});


});


function showModal(id) {
	$("#" + id).fadeIn(200);
	$('body').toggleClass('no-scroll');
}
function hideModal(id) {
	$("#" + id).fadeOut(400);
	$('body').toggleClass('no-scroll');
}

$('.banner-slider').slick({
	dots: false,
	arrows: false,
	loop: true,
	draggable: true,
	infinite: true,
	pauseOnHover: false,
	autoplay: true,
	autoplaySpeed: 2000,
	fade: true,
	cssEase: 'linear',
	speed: 1500,
	slidesToShow: 1,
	slidesToScroll: 1
});


$('.product-slider').slick({
	centerMode: true,
	centerPadding: '60px',
	loop: false,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	slidesToShow: 4,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
	]
});
$('.course-slider').slick({
	slidesToShow: 3,
	dots: true,
	arrows: true,
	loop: false,
	draggable: true,
	infinite: true,
	speed: 800,
	responsive: [
		{
			breakpoint: 768,
			settings: {

				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

$('.partners-slider').slick({
	dots: true,
	arrows: false,
	loop: false,
	draggable: true,
	infinite: true,
	speed: 800,
	autoplay: true,
	autoplaySpeed: 2000,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}

	]
});


$('a[href^="#"]').click(function (e) {
	if ($(this.hash).length > 0) {
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 800);
		return false;
		e.preventDefault();
	}
});

