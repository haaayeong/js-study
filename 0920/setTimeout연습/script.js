// 정해진 시간 뒤에 콜백함수가 실행됨.
// setTimeout(콜백함수, 시간);

// 정해진 시간마다 콜백함수가 반복실행됨.
// setInterval(콜백함수,시간);

let time = 5;
let interval = setInterval(() => {
  time--;
  document.querySelector('.time').innerHTML = time; // 이렇게 하면 이 함수가 계속 진행됨. 개발자도구창 가면 알 수 있음.
  // 그렇기 때문에 중지 시켜줘야함. 중지 시켜 주기 위해서 interval이라는 변수에 담아줌. 얘는 변수에 담아줘도 그냥 실행됨.
}, 1000);

setTimeout(() => {
  document.querySelector('.alert').style.display = 'none';
  clearInterval(interval); // 얘 때문에 이 함수는 이 위치에 있어야함. 그리고 얘가 있어서 interval이 중지됨.
  //메모리 누수가 되는 걸 막기 위해 이런 거 생각해줘야함.
}, 5000); // 밀리세컨드 단위라 5초 하고 싶으면 곱하기 1000해야함.

document.querySelector('.btn').addEventListener('click', () => {

  setTimeout(() => {
    document.querySelectorAll('.alert')[1].style.display='none';
  }, 5000); // 이렇게 하면 클릭할때마다 타이머가 쌓임. 그렇게 되면 만들어진 타이머마다 5초 뒤에 사라짐. 
  //그래서 이런 경우에 성능이 떨어질 수 있음.

});

console.log('그냥 추가함');