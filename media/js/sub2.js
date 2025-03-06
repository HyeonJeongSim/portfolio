//sec1. Highlight 슬라이드 처리
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const mainSlide = document.querySelector(".main-slide");
const slideCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slideCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideCount - 1;
    }
  }
  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}


//sec2. Apple Intelligence TAP 메뉴 처리

const tabButtons = document.querySelectorAll('.tab-wrap li');
const allSections = document.querySelectorAll('.tab-container > div');

// 탭 버튼 클릭 이벤트
tabButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 모든 버튼의 active 클래스 제거
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 모든 섹션의 active 클래스 제거
        allSections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
        
        // 클릭한 버튼에 active 클래스 추가
        button.classList.add('active');
        
        // 해당하는 섹션만 보이게 처리
        const targetSection = allSections[index];
        targetSection.classList.add('active');
        targetSection.style.display = 'flex';
    });
});

// 초기 상태 설정 (첫 번째 탭 활성화)
allSections.forEach((section, index) => {
    if (index === 0) {
        section.style.display = 'flex';
        section.classList.add('active');
    } else {
        section.style.display = 'none';
        section.classList.remove('active');
    }
});



//sec3. Camera Swiper 처리
var swiper = new Swiper('.swiper', {
  slidesPerView: '3',
  paginationClickable: true,
  spaceBetween: 50,
  freeMode: true,

  navigation: {
    nextEl: '.button:last-child',
    prevEl: '.button:first-child'
  }
});


// 기본 Swiper 설정
var swiper = new Swiper('.swiper', {
  slidesPerView: '3',
  paginationClickable: true,
  spaceBetween: 50,
  freeMode: true,
  navigation: {
    nextEl: '.button:last-child', 
    prevEl: '.button:first-child'
  }
 });

 
 // 미디어 쿼리 설정
 const tabletQuery = window.matchMedia('(max-width: 768px)');
 const mobileQuery = window.matchMedia('(max-width: 400px)');
 
 // 미디어 쿼리 핸들러 함수
 function handleScreenChange() {
  if (mobileQuery.matches) {
    // 400px 이하일 때 설정
    swiper.params.slidesPerView = 1;
    swiper.params.spaceBetween = 20;
  } else if (tabletQuery.matches) {
    // 768px 이하일 때 설정
    swiper.params.slidesPerView = 2;
    swiper.params.spaceBetween = 30;
  } else {
    // 기본 설정 (768px 초과)
    swiper.params.slidesPerView = 3;
    swiper.params.spaceBetween = 50;
  }
  // 변경된 설정 적용
  swiper.update();
 }
 
 // 초기 실행
 handleScreenChange();
 
 // 리스너 등록
 tabletQuery.addListener(handleScreenChange);
 mobileQuery.addListener(handleScreenChange);








  
//sec4 Chip 박스 처리
gsap.registerPlugin(Flip);

const activeClass = "is-active";
const inactiveClass = "is-inactive";
const cards = document.querySelectorAll(".card");

cards.forEach((card, idx) => {
    card.addEventListener("click", () => {
        const state = Flip.getState(cards);
        const isCardActive = card.classList.contains(activeClass);

        cards.forEach((otherCard, otherIdx) => {
            otherCard.classList.remove(activeClass);
            otherCard.classList.remove(inactiveClass);
            if (!isCardActive && idx !== otherIdx) {
                otherCard.classList.add(inactiveClass);
            }
        });

        if (!isCardActive) {
            card.classList.add(activeClass);
        }

        Flip.from(state, {
            duration: 1,
            ease: "expo.out",
            absolute: true
        });
    });
});


//sec5 Accessibility 처리
let progress = 50
let startX = 0
let active = 0
let isDown = false

/*Contants*/
const speedWheel = 0.02
const speedDrag = -0.1

const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

/*Items*/
const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
}

/*Animate*/
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}
animate()

/*Click on Items*/
$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i/$items.length) * 100 + 10
    animate()
  })
})

/*Handlers*/
const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
  isDown = false
}

/*Listeners*/
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)

