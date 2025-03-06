

$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
    var win_height =$(window).height();
    var header_height =$('header').height();
   
    if(scroll>win_height){
        $('.topMove').fadeIn('slow');  
    }else{
        $('.topMove').fadeOut('fast');
    }

});

$('.topMove').click(function(e){
   e.preventDefault(); //부드럽게 상단 이동
   $("html,body").stop().animate({"scrollTop":0},1000); 
});



// 햄버거 메뉴 처리
$(".menuOpen").click(function(e) {  // 이벤트 파라미터 추가
    e.preventDefault();  // 기본 동작 방지
    $("#gnb").animate({right:0,opacity:1}, 'fast');
    $('.box').show();
});
   
$(".close, .box").click(function(e) {  // 이벤트 파라미터 추가
    e.preventDefault();  // 기본 동작 방지
    $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
    $('.box').hide();
});


// 상단 네비게이션 스크롤 효과
$(window).scroll(function() {
    var screenSize = $(window).width();
    if(screenSize <= 400) {  // 모바일 화면일 때
        if($(window).scrollTop() > 700) {  // 스크롤이 50px 이상 내려갔을 때
            $("#headerArea").css({
                'background-color': '#000000d5',
                'backdrop-filter': 'blur(5px)',
                '-webkit-backdrop-filter': 'blur(5px)',
                'height': '100px'
            });
        } else {
            $("#headerArea").css({
                'background-color': 'transparent',
                'backdrop-filter': 'none',
                '-webkit-backdrop-filter': 'none',
                'height': '100px'  // 원래 높이
            });
        }
    }
});

var current=0; // 1(소형테블릿이상) , 0(모바일)
$(window).resize(function() {
    var screenSize = $(window).width(); 
    if(screenSize > 1024) {
        $("#gnb").css({right:0,opacity:1});
        current=1;
    }
    if(current==1 && screenSize <= 1024) {
        $("#gnb").css({right:'-100%',opacity:0});
        current=0;
    }
    
    // 리사이즈 시 모바일 크기가 아니면 배경 효과 제거
    if(screenSize > 400) {
        $("#headerArea").css({
            'background-color': 'transparent',
            'backdrop-filter': 'none',
            '-webkit-backdrop-filter': 'none',
            'height': '100px'  // 기본 높이로 복귀
        });
    }
});


    
//스크롤 이벤트 효과

let lastScrollTop = 0;
const delta = 5;
const header = $('.menuOpen').parent();
let navbarHeight = header.outerHeight();

// 윈도우 리사이즈 이벤트 처리
$(window).on('resize', function() {
    navbarHeight = header.outerHeight();
    //updateHeaderStyle();
});

// 스크롤 이벤트 처리
$(window).scroll(function(event){
    if (window.matchMedia("(min-width: 1025px)").matches) {
        handleScroll();
    }
});

function handleScroll() {
    let st = $(window).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        header.css({
            'transform': 'translateY(-150%)',
            'transition': 'transform 0.5s ease-in-out'
        });
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            header.css({
                'transform': 'translateY(0)',
                'transition': 'transform 0.3s ease-in-out'
            });
        }
    }
    
    lastScrollTop = st;
}

// function updateHeaderStyle() {
//     if (window.matchMedia("(max-width: 1024px)").matches) {
//         // 모바일 화면에서는 스크롤 효과 제거
//         header.css({
//             'transform': 'none',
//             'transition': 'none'
//         });
//     }
// }

// 초기 실행
//updateHeaderStyle();



