const ab = document.getElementById('ab');

// function show() {
//   ab.style.display = 'block';
// }

// function hide() {
//   ab.style.display = 'none';
// }

// 위에 2개를 하나로 합치는 방법
function showHide(value) {
  ab.style.display = value;
}

const alertBox = document.querySelectorAll('.alert-box')[1]; // 이렇게 해야 두번째 박스가 잡힘.

function showBox(msg) {
  // js문법
  // document.querySelectorAll('.alert-box')[1].style.display = 'block';
  // document.querySelectorAll('.alert-box')[1].innerHTML = msg;

  // jQuery문법
  $('.alert-box').eq(1).css('display','block');
  $('.alert-box').eq(1).html(msg);
}

function closeBox() {
  alertBox.style.display = 'none';
}