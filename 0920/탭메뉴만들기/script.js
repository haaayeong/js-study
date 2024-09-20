// const tabBtns = document.querySelectorAll('.tab-button');
// const tabContents = document.querySelectorAll('.tab-content');

// for(let i=0; i<tabBtns.length; i++) {
//   tabBtns[i].addEventListener('click', () => {
//     for(let i=0; i<tabBtns.length; i++) {
//       tabBtns[i].classList.remove('select');
//       tabContents[i].classList.remove('show');
//     }

//     tabBtns[i].classList.add('select');
//     tabContents[i].classList.add('show');
//   })
// }


//jQuery
// const tabBtns = $('.tab-button'); // 속도를 위해서 변수에 넣음.
// const tabContents = $('.tab-content');

// $(tabBtns).on('click', (e) => {
//   $(tabBtns).removeClass('select');
//   $(tabContents).removeClass('show');

//   // e.target.dataset.num 이렇게 하면 dataset에 num이라는 변수로 저장해놨던것만 뽑아낼 수 있음.
//   let i = e.target.dataset.num;
//   $(tabBtns).eq(i).addClass('select');
//   $(tabContents).eq(i).addClass('show');
// })


// 버블링을 활용하여 반복문 줄임.
const tabBtns = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const tabBtnBox = document.querySelector('.list'); // ul태그 가지고 옴.

tabBtnBox.addEventListener('click', (e) => { // 저 e(event)객체는 저 앞에 tabBtnBox에 대한 것이 아니라 click이 실행된 것에 대한 것만 잡힘.
  //ul에 패딩을 주면 ul부분을 누를 수 있기 때문에 ul 정보를 볼 수는 있지만 지금은 안 됨.
 let i = e.target.dataset.num;

 removeClass();
 tabBtns[i].classList.add('select');
 tabContents[i].classList.add('show');
})

function removeClass() {
  for(let i=0; i<tabBtns.length; i++) {
    tabBtns[i].classList.remove('select');
    tabContents[i].classList.remove('show');
  }
}