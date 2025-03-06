document.addEventListener('DOMContentLoaded', function() {
  // Section 2 슬라이더
  let sec2CurrentPage = 1;
  const sec2MaxPage = 3;
  const sec2Images = {
      // 각 페이지별 이미지 경로를 저장할 객체
      // 실제 이미지 경로로 교체 필요
      page1: {
          img3: './images/sub4/2pro3.jpg',
          img5: './images/sub4/2pro5.jpg',
          img6: './images/sub4/2pro6.jpg'
      },
      page2: {
          img3: './images/sub4/2pro3_2.jpg',
          img5: './images/sub4/2pro5_2.jpg',
          img6: './images/sub4/2pro6_2.jpg'
      },
      page3: {
          img3: './images/sub4/2pro3_3.jpg',
          img5: './images/sub4/2pro5_3.jpg',
          img6: './images/sub4/2pro6_3.jpg'
      }
  };

  // Section 3 슬라이더
  let sec3CurrentPage = 1;
  const sec3MaxPage = 3;
  const sec3Images = {
      // 각 페이지별 이미지 경로를 저장할 객체
      // 실제 이미지 경로로 교체 필요
      page1: {
          img3: './images/sub4/3pro3.jpg',
          img5: './images/sub4/3pro5.jpg',
          img6: './images/sub4/3pro6.jpg'
      },
      page2: {
          img3: './images/sub4/3pro3_2.jpg',
          img5: './images/sub4/3pro5_2.jpg',
          img6: './images/sub4/3pro6_2.jpg'
      },
      page3: {
          img3: './images/sub4/3pro3_3.jpg',
          img5: './images/sub4/3pro5_3.jpg',
          img6: './images/sub4/3pro6_3.jpg'
      }
  };

  // Section 2 이미지 변경 함수
  function updateSec2Images() {
      const images = sec2Images[`page${sec2CurrentPage}`];
      document.querySelector('.sec2_3 img').src = images.img3;
      document.querySelector('.sec2_5 img').src = images.img5;
      document.querySelector('.sec2_6 img').src = images.img6;
      document.querySelector('.sec2_2 .page-number').textContent = 
          `${String(sec2CurrentPage).padStart(2, '0')}/${String(sec2MaxPage).padStart(2, '0')}`;
  }

  // Section 3 이미지 변경 함수
  function updateSec3Images() {
      const images = sec3Images[`page${sec3CurrentPage}`];
      document.querySelector('.sec3_3 img').src = images.img3;
      document.querySelector('.sec3_5 img').src = images.img5;
      document.querySelector('.sec3_6 img').src = images.img6;
      document.querySelector('.sec3_2 .page-number').textContent = 
          `${String(sec3CurrentPage).padStart(2, '0')}/${String(sec3MaxPage).padStart(2, '0')}`;
  }

  // Section 2 버튼 이벤트
  document.querySelector('.prev-sec2').addEventListener('click', () => {
      sec2CurrentPage = sec2CurrentPage > 1 ? sec2CurrentPage - 1 : sec2MaxPage;
      updateSec2Images();
  });

  document.querySelector('.next-sec2').addEventListener('click', () => {
      sec2CurrentPage = sec2CurrentPage < sec2MaxPage ? sec2CurrentPage + 1 : 1;
      updateSec2Images();
  });

  // Section 3 버튼 이벤트
  document.querySelector('.prev-sec3').addEventListener('click', () => {
      sec3CurrentPage = sec3CurrentPage > 1 ? sec3CurrentPage - 1 : sec3MaxPage;
      updateSec3Images();
  });

  document.querySelector('.next-sec3').addEventListener('click', () => {
      sec3CurrentPage = sec3CurrentPage < sec3MaxPage ? sec3CurrentPage + 1 : 1;
      updateSec3Images();
  });
});