'use strict';

// ハンバーガー
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();

// アコーディオン
const title = document.querySelectorAll(".jsAccordionTitle");
title.forEach((titleEach) => {
  let content = titleEach.nextElementSibling;
  titleEach.addEventListener("click", () => {
    titleEach.classList.toggle("is-active");
    content.classList.toggle("is-open");
  });
});

// スライダー
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1.5, // １度に表示するスライド数
  centeredSlides: true, //現在のスライドを中央に表示
  spaceBetween: 10, // スライド同士の余白
  // 自動再生
  autoplay: {
    delay: 5000 // 次のスライドに切り替わる時間の設定（ミリ秒:1000=1秒）
  },
  breakpoints: {
    701: {
      slidesPerView: 1.95
    },
    1001: {
      slidesPerView: 3.75, // １度に表示するスライド数
      spaceBetween: 56, // スライド同士の余白
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// チェックボックス確認
  const $submitBtn = $("#contact-btn");
  $('.alert').hide();
  $("#form input, #form textarea").on("change", function() {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form textarea').val() !== "" &&
      $('#form #policy').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);
      $('.alert').hide();
      $('.form').css('paddingBottom', 35);
    } else {
      $submitBtn.prop('disabled', true);
      $('.alert').fadeIn();
      $('.form').css('paddingBottom', 0);
    }
  });

  // お問い合わせ完了メッセージを出す。
$('#form').submit(function (event) {
  var formData = $('#form').serialize();
  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeD6Qm60Zy_dLWA5aPr90CQZr_qusw-UYcmvEZTCuiXpJopUw/viewform?usp=sf_link",
    data: formData,
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        $("#contact-btn").fadeOut();
      },
      200: function () {
        $(".false-message").slideDown();
      }
    }
  });
  event.preventDefault();
});
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

AOS.init();






