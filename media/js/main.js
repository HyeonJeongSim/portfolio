
//sec2
const content = ['Make it ', 'Yours', '.'];
let typingIdx = 0;
let wordIdx = 0;

function typing() {
   if (wordIdx < content.length) {
       if (typingIdx < content[wordIdx].length) {
           if (wordIdx === 1) {
               $(".sec2_8 dt").append(`<span style="color:#006EDB">${content[wordIdx][typingIdx]}</span>`);
           } else {
               $(".sec2_8 dt").append(content[wordIdx][typingIdx]);
           }
           typingIdx++;
       } else {
           wordIdx++;
           typingIdx = 0;
       }
   } else {
       $(".sec2_8 dt").empty();
       typingIdx = 0;
       wordIdx = 0;
   }
}

let clear1 = setInterval(typing, 250);



//sec5
//Swiper 처리
var ww = $(window).width();
var swiper = undefined;
var swiper2 = undefined;

function initSwiper() {
    // 기존 Swiper 인스턴스가 존재하면 제거
    if (swiper !== undefined) {
        swiper.destroy();
        swiper = undefined;
    }
    if (swiper2 !== undefined) {
        swiper2.destroy();
        swiper2 = undefined;
    }

    // 창 너비가 640px 이하일 때
    if (ww <= 640) {
        // 모바일/태블릿 뷰 Swiper 설정
        swiper = new Swiper(".mySwiper", {
            spaceBetween: 10, // 슬라이드 사이 간격
            slidesPerView: 4, // 한 번에 4개 슬라이드 보이기
            freeMode: true, // 자유로운 슬라이딩
            watchSlidesProgress: true, // 슬라이드 진행 상황 감지
        });
        
        swiper2 = new Swiper(".mySwiper2", {
            loop: true, // 무한 루프
            slidesPerView: 1, // 한 번에 1개 슬라이드 보이기
            spaceBetween: 20, // 슬라이드 사이 간격 없음
            thumbs: {swiper: swiper,}, // 썸네일 슬라이더 연결
            
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            }
        });
    } else {
        // 데스크탑 뷰 Swiper 설정 (현재는 모바일 설정과 동일)
        swiper = new Swiper(".mySwiper", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });
        
        swiper2 = new Swiper(".mySwiper2", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            thumbs: {swiper: swiper,},

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            }
        });
    }

    // Swiper 인스턴스 업데이트
    swiper.update();
    swiper2.update();
    $('.swiper2 li').css('filter','brightness(30%) grayscale(70%)');

}

// 페이지 로드 시 초기 Swiper 설정
initSwiper();

//창 크기 변경 시 Swiper 재설정
$(window).on('resize', function () {
    var newWW = $(window).width();
    // 창 너비가 변경되었을 때만 Swiper 재설정
   
    if (newWW !== ww) {
        ww = newWW;
        initSwiper();
    }
});


//Swiper click 시 밝기 처리
$('.swiper2 li').css('filter','grayscale(100%)');

$('.swiper2 li').click(function(e){
   e.preventDefault();
   $('.swiper2 li').css('filter','grayscale(100%)');
   $(this).css('filter','grayscale(0%)');
});

// 페이지 로드 시 초기 .swiper2 brigtness on
$('.swiper2 li:eq(0)').first().css({
    'filter': 'brightness(100%)'
});


//비디오 팝업
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
    });
});

