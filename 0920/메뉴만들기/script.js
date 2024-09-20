const hamBtn = document.querySelector('.navbar-toggler');

hamBtn.addEventListener('click', () => {
  // js코드
  // document.querySelector('.list-group').classList.toggle('show') // .classList는 해당 태그에 달려있는 클래스의 리스트를 말함.
  // 거기에 css에 만들어놓은 show라는 키워드를 추가시킴. toggle을 쓰면 쉽게 탈부착이 가능함.

  //jQuery문법
  $('.list-group').toggleClass('show')

});

document.querySelector('#write').addEventListener('click', () => {
  // document.querySelector('.black-bg').classList.add('visi');
  $('.black-bg').fadeIn();  
});

$('#close').on('click', () => {
  // $('.black-bg').removeClass('visi');
  $('.black-bg').fadeOut(); 
})

const modeBtn = document.querySelector('#mode');

document.querySelector('#mode').addEventListener('click', () => {
  document.body.classList.toggle('dark'); // body에 직접적으로 붙여준것이므로 querySelector('.dark') 대신에 body만 써도 됨.
  
  if(modeBtn.value == "다크모드") {
    modeBtn.value = "라이트모드"
  } else {
    modeBtn.value = "다크모드"
  }
})