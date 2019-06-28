$(document).ready(function () {
	// 	$("body").niceScroll({
	// horizrailenabled:false
	// });
	// вверхнее красиво-вращающееся меню
	// 1 и 2 строка это анимация крестика
	//3 строка - слайдер вниз меню
	//слайдер вниз меню отвечает за работу мобильного меню к переносу
	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".top-menu").slideToggle();
		return false;
	});
	$('body, .top-menu ul li a').click(function () {
		$('.hidden-mnu').hide("slow");
	});


		$('#clients_slider').slick({
  dots: false,
  arrows:true,
  autoplay:true,
  autoplaySpeed:1500,
 // infinite: true,
 //slidesToShow:2,
  //slidesToScroll:2,
    responsive: [
     {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
  ///      slidesToScroll: 1
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
  ///      slidesToScroll: 1
      }
    }
   ]
});








	//Ajax push mesege http://api.jquery.com/jquery.ajax/
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function () {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
	//castom code









});