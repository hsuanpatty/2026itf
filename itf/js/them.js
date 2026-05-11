$(function () {

  /* =========================
   * 1. 側邊選單展開 / 收合
   * ========================= */
  $(".parent .fa.fa-plus").remove();
  $(".parent .toggled").append("<i class='fa fa-plus'></i>");

  $('.parent .toggled').on('click', function (e) {
    e.preventDefault();

    if (!$(this).parent().hasClass('active')) {
      $('+ ul', $('a.list-group-item.main-item')).slideUp();
      $('a.list-group-item.main-item').removeClass('active');
    }

    $(this).parent().toggleClass('active');
    $('+ ul', $(this).parent()).slideToggle('slow');

    return false;
  });


  /* =========================
   * 2. 平滑滑動 + 避免被 header 遮住
   * ========================= */
  $(".nav-column ul li a").on("click", function (e) {

    // 只有 # 開頭才執行平滑滾動
    if (this.hash) {

      e.preventDefault();

      let target = $(this.hash);

      if (target.length === 0) return;

      // 固定 header 高度
      let offset = $(".menu-height").outerHeight() || 80;

      $("html, body").animate({
        scrollTop: target.offset().top - offset
      }, 1000);
    }

  });


  /* =========================
   * 3. 回首頁（可選）
   * ========================= */
  $(".nav-column ul li a").eq(0).on("click", function () {
    $(".nav-column").css("position", "static");
  });

});