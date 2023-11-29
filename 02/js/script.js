// html의 구조가 파악되면 진행
$(function () {
  // 대상을 변수에 저장
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;
  const $header = $('#header');

  // 메뉴에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    // 진입한 영역의 메뉴에 on클래스 부여
    $(this).addClass('on');
    //진입한 영역에 들어오면 active클래스 부여
    $header.addClass('active');

    // 서브메뉴를 활성화 = 보이게 = slide down
    $submenu.stop().slideDown(duration);
  });

  // 마우스가 메뉴에서 나갈 때
  $menu.on('mouseleave', function () {
    // on클래스 제거
    $menu.removeClass('on');
    //진입한 영역에 들어오면 active클래스 제거
    $header.removeClass('active');

    // 서브메뉴를 비활성화 = 안보이게 = slide up
    $submenu.stop().slideUp(duration);
  });
});
