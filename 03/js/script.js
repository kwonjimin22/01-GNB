$(function () {
  const $header = $('#header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;
  const $window = $(window);

  $menu.on('mouseenter', function () {
    $(this).addClass('on');
    $header.addClass('active');
    $submenu.stop().fadeIn(duration);
  });

  $menu.on('mouseleave', function () {
    $menu.removeClass('on');
    $header.removeClass('active');
    $submenu.stop().fadeOut(duration);
  });

  // 마우스 휠을 조작했을 때 : wheel
  $window.on('wheel', function (e) {
    // 마우스 휠을 조작했을 때의 이벤트 정보를 보자
    // console.log(e);
    // console.log(e.originalEvent.wheelDelta);

    // 마우스를 올리면 originalEvent.wheelDelta가 양수, 내리면 음수
    if (e.originalEvent.wheelDelta > 0) {
      // 휠을 올린 상태 --> header를 보이게하자 --> hide 클래스 제거
      $header.removeClass('hide');
    } else {
      // 휠을 내린 상태 --> header를 숨기자 --> hide 클래스 부여
      $header.addClass('hide');
    }
  });
});
