// 이벤트
// click, dblclick
// mouseover, mouseout
// mouseup, mousedown : 마우스를 누르고 있을때가 다운 뗄 때가 업임.
// mousemove
// keydown, keyup : 키보드 키를 누를때 뗄 때

// 해당요소.addEventLisnter('이벤트종류', 콜백함수)
function showModal() {
  alert('모달창 나타남');
}

const btn = document.querySelector('.btn');
// btn.addEventListener('click', showModal);
// btn.removeEventListener('click', showModal);

// btn.addEventListener('click', () => {
//   alert('알림창');
// });

// 함수 내용은 동일하지만 다른 객체이므로 삭제 안됨.
btn.addEventListener('click', () => {
  alert('알림창'); // 이렇게 하면 안에 있는 함수가 같은 모양이지만 실질적으로는 다른 애기 때문에 알림창이 나타남.
});

// 이벤트 객체
btn.addEventListener('click', (e) => {
  console.log(e.type);
  console.log(e.currentTarget);
  console.log(e.target); // 얘는 좀 자주 쓰는 편임.
  console.log(e.clientX); // 버튼의 어디를 누르냐에 따라서 좌표값이 다르게 나옴.
  console.log(e.clientY);
});