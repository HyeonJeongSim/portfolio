//비디오 팝업 처리
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


//사운드트랙 처리
document.addEventListener('DOMContentLoaded', function() {
  // 오디오를 재생하는 함수
  function playAudio(event, audioId) {
      // 기본 동작 막기 (상단 이동 방지)
      event.preventDefault();

      // 모든 오디오 요소를 가져와서 멈춤 및 current 클래스 제거
      var audios = document.getElementsByTagName('audio');
      for (var i = 0; i < audios.length; i++) {
          audios[i].pause();
          audios[i].currentTime = 0;
          audios[i].parentNode.parentNode.querySelector('img').classList.remove('current');
          // 클릭되지 않은 상태에서도 .img_box에 active 클래스가 추가되지 않도록 수정
          audios[i].parentNode.parentNode.querySelector('.img_box').classList.remove('active');
      }

      // 선택한 오디오를 재생
      var audio = document.getElementById(audioId);
      audio.play();

      // 클릭된 링크의 부모 요소(li)의 이미지에 current 클래스 추가
      var img = event.target.closest('li').querySelector('img');
      img.classList.add('current');

      // 클릭된 링크의 부모 요소(li)의 이미지 박스(.img_box)의 before 및 after에 active 클래스 추가
      var imgBox = img.closest('.img_box');
      imgBox.classList.add('active');
  }

  // 오디오를 멈추는 함수
  function stopAudio(event, audioId) {
      // 기본 동작 막기 (상단 이동 방지)
      event.preventDefault();

      var audio = document.getElementById(audioId);
      audio.pause();
      audio.currentTime = 0;

      // 클릭된 링크의 부모 요소(li)의 이미지에서 current 클래스 제거
      var img = event.target.closest('li').querySelector('img');
      img.classList.remove('current');

      // 클릭된 링크의 부모 요소(li)의 이미지 박스(.img_box)의 before 및 after에 active 클래스 제거
      var imgBox = img.closest('.img_box');
      imgBox.classList.remove('active');
  }

  // 전역으로 함수 정의
  window.playAudio = playAudio;
  window.stopAudio = stopAudio;
});

