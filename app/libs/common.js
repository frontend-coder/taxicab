$(document).ready(() => {
  // $(() => {
  //   function init() {
  //     $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
  //     $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
  //     $('body, .nav ul li a').on('click', closeMenuIcon);
  //   }


  //   function closeMenuIcon() {
  //     // $(this).removeClass('menu-icon--open');
  //     $('[data-element="toggle-nav"]').removeClass('nav--active');
  //   }


  //   function toggleMenuIcon() {
  //     $(this).toggleClass('menu-icon--open');
  //     $('[data-element="toggle-nav"]').toggleClass('nav--active');
  //   }

  //   function toggleSubMenu() {
  //     $(this).toggleClass('nav__link--plus nav__link--minus');
  //     $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
  //   }

  //   init();
  // });

  // $('body, .nav ul li a').click(() => {
  //   $('.nav').removeClass('nav--active');
  //   // $('#toggle').removeClass('active');
  //   // $('body').removeClass('stop');
  // });


  $('.menu-icon').click(() => {
    $('.menu-icon').toggleClass('menu-icon--open');
    $('[data-element="toggle-nav"]').toggleClass('nav--active');

    return false;
  });

  $('body, .overlay-menu ul li a').click(() => {
    $('[data-element="toggle-nav"]').removeClass('nav--active');
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
  $('.top_line_menu ul li a, .nav ul li a').mPageScroll2id({
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
