$(document).ready(() => {
  // вверхнее красиво-вращающееся меню
  // 1 и 2 строка это анимация крестика
  // 3 строка - слайдер вниз меню
  // слайдер вниз меню отвечает за работу мобильного меню к переносу
  $('.toggle-mnu').click(function () {
    $(this).toggleClass('on');
    $('.top-menu').slideToggle();
    return false;
  });
  $('body, .top-menu ul li a').click(() => {
    $('.hidden-mnu').hide('slow');
  });


  $('.humburger').on('click', () => {
    $('.humburger').toggleClass('humburger_active');
    $('.menu__list').toggleClass('menu__list--active');
  });


  $(window).scroll(function () {
    if ($(this).scrollTop() >= 290) {
      $('.top_line').addClass('fixed-one');
    } else {
      $('.top_line').removeClass('fixed-one');
    }
  });

  jQuery('#end_go').datetimepicker({ format: 'd.m.Y H:i' });

  jQuery('#start_go').datetimepicker({ format: 'd.m.Y H:i' });

  /* Page Scroll to id fn call */
  $('.top_line_menu ul li a, .menu ul li a').mPageScroll2id({
    layout: 'auto',
    offset: '.top_line',
    autoScrollSpeed: true,
    scrollSpeed: 1000,
    highlightSelector: '.menu-site ul li a',
  });

  /* demo functions */
  $('a[rel=\'next\']').click(function (e) {
    e.preventDefault();
    const to = $(this).parent().parent('section').next()
      .attr('id');
    $.mPageScroll2id('scrollTo', to);
  });


  $('#clients_slider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    // infinite: true,
    // slidesToShow:2,
    // slidesToScroll:2,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
          // /      slidesToScroll: 1
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          // /      slidesToScroll: 1
        },
      },
    ],
  });

  $('select').each(function () {
    const $this = $(this);
    const numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    const $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    const $list = $('<ul />', {
      class: 'select-options',
    }).insertAfter($styledSelect);

    for (let i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val(),
      }).appendTo($list);
    }

    const $listItems = $list.children('li');


    $styledSelect.click(function (e) {
      if ($('.select-options').is(':visible')) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));

        $list.hide();
        // console.log($this.val());
      } else {
        e.stopPropagation();
        $('div.select-styled.active').each(function () {
          $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
      } // end if
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      // console.log($this.val());
    });

    $(document).click(() => {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });


  // Ajax push mesege http://api.jquery.com/jquery.ajax/
  $('form').submit(function () { // Change
    const th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', // Change
      data: th.serialize(),
    }).done(() => {
      $('.forms-calldecor .success').addClass('active');
      setTimeout(() => {
        // Done Functions
        $('.forms-calldecor .success').removeClass('active');
        th.trigger('reset');
        $.magnificPopup.close();
      }, 3000);
    });
    return false;
  });
  // castom code
});
