// 실제로는 DB에서 해당 정보를 빼와서 처리함
let fruits = [
  { name : 'apple', memo : '빨간색임', cnt : 1},
  { name : 'mango', memo : '노란색임'},
  { name : 'melon', memo : '연두색임'},
  { name : 'strawberry', memo : '딸기'},
  { name : 'watermelon', memo : '수박'}
];

// for(let i=0; i<fruits.length; i++) {
 
// }

// for(let fruit in fruits) {
//   //이렇게 반복돌려도 됨.
// }

// fruits.forEach((f, i) => { // 얘도 반복문임. // 두 번재 매개변수에는 무조건 인덱스 번호가 들어감.
//   document.querySelectorAll('.card-title')[i].innerHTML = fruits[i].name;
//   document.querySelectorAll('.card-text')[i].innerHTML = fruits[i].memo;
//   document.querySelectorAll('.card-img-top')[i].setAttribute('src', `./img/img/${fruits[i].name}.jpg`);
//   //저 fruits[i]가 결국에는 object 하나하나를 말하는 것이므로 f로 바꿔서 돌려도 됨.
// })

fruits.forEach((fruit) => {
  let item = `<div class="col">
                <div class="card" style="width: 18rem;">
                  <img src="./img/img/${fruit.name}.jpg" class="card-img-top">
                  <div class="card-body">
  
                  <h5 class="card-title">${fruit.name}</h5>
                  <p class="card-text">${fruit.memo}</p>
                  <button class="btn btn-primary cart">담기</button>
                  </div>
                 </div>
              </div>`;

  // document.querySelector('.row').insertAdjacentHTML('beforeend', item);
  // jQuery 문법
  $('.row').append(item);
})

//append를 쓸거면 html에 div태그를 만들어놓고 그 다음에 넣어야 문자열이 아닌 html코드로 인식함.


// 버튼에 이벤트를 심는 방법(이벤트리스너)
// document.querySelectorAll('.cart')[0].addEventListener(이벤트, 콜백함수)
// document.querySelectorAll('.cart')[0].addEventListener('click', () => {
//   alert('클릭');
// })

// jQuery 문법
$('.cart').on('click', (event) => {
  // let name = event.target.previousElementSibling.previousElementSibling.innerHTML;// 그냥 previousElementSibling만 하면 바로 전꺼만 나와서 그 전전꺼를 뽑고 싶으면 두 번 써야함.

  // jQuery
  let name = $(event.target).siblings('h5').text(); //형제 중에 어떤 것인지 선택 가능.
  
  if(localStorage.getItem('name') != null) {
    // 로컬스토리지에 있는걸 빼와야 함.
    let temp = localStorage.getItem('name');
    // 배열로 변환
    temp = JSON.parse(temp);
    // // 새로 장바구니에 담을 상품명을 배열에 추가
    // temp.push(name);
    // // 다시 로컬스토리지에 등록
    // localStorage.setItem('name', JSON.stringify(temp));

    let isHave = false; // 장바구니에 있나 없나를 저장하는 변수
    let index; // 장바구니에 있으면 해당 인덱스를 저장하는 변수

    temp.forEach((data, i) => { // 배열을 반복할 때 두 번째 매개변수를 담아주면 그건 무조건 인덱스를 저장하는 매개변수임.
      if(data.name === name) {
        isHave = true;
        index = i;
      } 
    })

    if(isHave) {
      temp[index].cnt++;
    } else {
      temp.push({'name' : name, 'cnt' : 1})
    }

    localStorage.setItem('name', JSON.stringify(temp))

  } else {
    // let names = [name]; // name을 배열로 바꿈.
    // let name_json = JSON.stringify(names); // json으로 변환
    localStorage.setItem('name', JSON.stringify([{'name': name, 'cnt' : 1}])) // 위의 두 과정을 한번에 처리하려면 이렇게 처리하면 됨.
  }

})

// 클래스명이 btn-remove인걸 클릭하면
// 장바구니를 비우시겠습니까? 모달창이 나타나고
// 확인버튼을 누르면 로컬스토리지가 삭제되도록 구현

document.querySelector('.btn-remove').addEventListener('click', () => {
  if(confirm('장바구니를 비우시겠습니까?')) {
    localStorage.removeItem('name');
  }
});



// 로컬 스토리지 기본 개념
// 세션 스토리지 : 웹사이트가 실행되고 있는 동안만 저장
// 로컬 스토리지 : 사용자 컴퓨터에 저장
let arr = [1, 2, 3, 4, 5]; // 로컬 스토리지에 이렇게 리스트 형태로 저장해도 문자열로 저장됨.
// 배열 arr을 구조를 고정한 상태로 문자열로 변환
//배열 arr을 json형식으로 변환
let arr_json = JSON.stringify(arr); // 얘를 하면 배열구조로 바뀌어서 나옴.
// 변환 arr을 로컬스토리지에 저장
localStorage.setItem('arr', arr_json) // 괄호 안에 key, value가 들어가면 됨.
//object를 넣으려면 다른 과정이 추가적으로 더 필요함. 안 그러면 그냥 object라고 나옴.

// 로컬스토리지에서 arr을 빼옴(json)
let arr_local = localStorage.getItem('arr');
// json인 arr데이터를 js형식에 맞게 변환
// 문자열 -> 배열로 변환
let arr_parse = JSON.parse(arr_local); // 얘는 문자열을 배
console.log(arr_parse);
console.log(arr_parse[0]); 