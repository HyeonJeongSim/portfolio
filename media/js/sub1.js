//TAB 메뉴
const tabBtns = document.querySelectorAll('.tab-wrap > li');
const tabConts = document.querySelectorAll('.tab-container > div');

tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); //각각의 버튼을 클릭하면~ 버튼명과 index 번호를 담는다
        tabBtns.forEach(otherBtn => { //모든 버튼 비활성화
            otherBtn.classList.remove('active');
        });
        tabConts.forEach(othercont => { //모든 본문 비활성화
            othercont.classList.remove('active');
        });
        tabBtns[index].classList.add('active');
        tabConts[index].classList.add('active');
    });
});


                    
// WELCOM TO APPLE 동적효과
// const p = document.querySelector('.sec2 ul li:nth-of-type(15) div p');
// const text = 'Welcome to ';
// const spanText = 'Apple';

// function animate() {
//     p.textContent = '';
//     let i = 0;
    
//     const writeText = setInterval(() => {
//         if (i < text.length) {
//             p.textContent += text[i];
//         } else if (i === text.length) {
//             const span = document.createElement('span');
//             span.style.color = '#F56300';
//             p.appendChild(span);
//         } else if (i < text.length + spanText.length) {
//             p.querySelector('span').textContent += spanText[i - text.length];
//         } else {
//             clearInterval(writeText);
//             setTimeout(animate, 1000);
//         }
//         i++;
//     }, 150);
// }

// animate();

// const targetP = document.querySelector('.sec2 ul li:nth-of-type(15) div p');

// const style = document.createElement('style');
// style.textContent = `
//   .letter {
//     fill-opacity: 0;
//   }

//   .welcome-letter { 
//     fill: #fff;
//   }
  
//   .apple-letter { 
//     fill: #F56300;
//   }
// `;
// document.head.appendChild(style);

// function animate() {
//   const welcomeText = 'Welcome to ';
//   const appleText = 'Apple';
  
//   let svg = `<svg viewBox="0 0 400 60">`;
  
//   // Welcome to
//   welcomeText.split('').forEach((letter, index) => {
//     svg += `
//       <text 
//         class="letter welcome-letter" 
//         x="${10 + (index * 20)}" 
//         y="40" 
//         font-family="Pacifico, cursive" 
//         font-size="var(--font-size, 30px)"
//         style="animation: fadeIn 0.1s forwards ${index * 0.1}s">
//         ${letter}
//       </text>`;
//   });
  
//   // Apple
//   appleText.split('').forEach((letter, index) => {
//     svg += `
//       <text 
//         class="letter apple-letter" 
//         x="${200 + (index * 20)}" 
//         y="40" 
//         font-family="Pacifico, cursive" 
//         font-size="var(--font-size, 30px)"
//         style="animation: fadeIn 0.1s forwards ${(welcomeText.length + index) * 0.1}s">
//         ${letter}
//       </text>`;
//   });
  
//   svg += `</svg>`;
  
//   targetP.innerHTML = svg;
// }

// const keyframes = `
//   @keyframes fadeIn {
//     from {
//       fill-opacity: 0;
//       transform: translate(-10px, 10px);
//     }
//     to {
//       fill-opacity: 1;
//       transform: translate(0, 0);
//     }
//   }
// `;

// const styleSheet = document.createElement('style');
// styleSheet.textContent = keyframes;
// document.head.appendChild(styleSheet);

// animate();
// setInterval(animate, 4000);