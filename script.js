const swiper = new Swiper('.swiper', {

  // オプションの設定
  loop: true,

  // ページネーション表示の設定
  pagination: {
    el: '.swiper-pagination',
  },

  // ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});