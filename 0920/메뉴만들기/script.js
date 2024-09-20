const hamBtn = document.querySelector('.navbar-toggler');

hamBtn.addEventListener('click', () => {
  // js코드
  // document.querySelector('.list-group').classList.toggle('show') // .classList는 해당 태그에 달려있는 클래스의 리스트를 말함.
  // 거기에 css에 만들어놓은 show라는 키워드를 추가시킴. toggle을 쓰면 쉽게 탈부착이 가능함.

  //jQuery문법
  $('.list-group').toggleClass('show')

});

document.querySelector('#write').addEventListener('click', () => {
  document.querySelector('.black-bg').classList.add('visi');  
});

$('#close').on('click', () => {
  $('.black-bg').removeClass('visi');
})