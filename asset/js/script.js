$(function(){
  var pagetop = $('#arrow_top');

  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
 });
});

$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('nav a[href^="#"]').click(function(){
    // 移動先を50px上にずらす
    var adjust = 100;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top - adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// $(function() {
$(window).on('load resize',function() {
  if (window.matchMedia("(max-width: 960px)").matches) {
    //画面横幅が768px以下のときの処理
    $(function () {
      const height = $(".js_header").height();
      $("main").css("margin-top", height+20);
    });
  } else {
    //画面横幅が769px以上のときの処理
    $(function () {
      const height = $(".js_header").height();
      $("main").css("margin-top", 0);
    });
  };
});