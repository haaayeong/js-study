// div태그 생성
let divTag = document.createElement('div');
let textNode = document.createTextNode('텍스트노드임');

divTag.className = 'alert'; // div태그한테 클래스명을 설정함.
divTag.innerHTML = '<b>강조</b>생성된 div 태그임';

// append : 맨 뒤에 추가
// prepend : 맨 앞에 추가
// before : 이전에 추가
// after : 이후에 추가
document.body.append(divTag);//innerHTML 안 씀. 그거 쓰면 원래 안에 있던 코드들이 날아감.

const ol = document.querySelector('#ol');

ol.before('이전');
ol.after('이후');

const liTag = document.createElement('li');
liTag.innerHTML = 'prepend';
ol.prepend(liTag);

liTag.innerHTML = 'append';
ol.append(liTag); // 이렇게 하면 바로 위에 작업했던 게 사라짐. 사라지지 않게 하려면 변수명을 다르게 해주면 됨.

const liTag2 = document.createElement('li');
liTag2.innerHTML = 'prepend';
ol.prepend(liTag2); // 이렇게 변수명 다르게 해서 넣으면 사라지지 않고 동시에 나옴.


const div = document.querySelector('#div');

// div.insertAdjacentHTML(위치, html)
// beforebegin : 해당 태그 앞에
// afterbegin : 해당 태그 첫번째 자식
// beforeend : 해당 태그 마지막 자식
// afterend : 해당 태그 뒤에
div.insertAdjacentHTML("beforebegin", '<p>앞에</p>');
div.insertAdjacentHTML("afterbegin", '<p>해당 태그 첫번째 자식</p>');
div.insertAdjacentHTML("beforeend", '<p>해당 태그 마지막 자식</p>');
div.insertAdjacentHTML("afterend", '<p>해당 태그 뒤에</p>');


// 태그 지우기
// divTag.remove(); 이렇게 하면 해당 태그를 가지고 있는 코드들이 지워짐.
// setTimeout(콜백함수, 시간);
setTimeout(() => {
  divTag.remove();
}, 3000); // 이렇게 하면 3초 정도 뒤에 해당 태그가 없어짐.


// 이동 
// 아이디로 구분 지은 것들은 어차피 코드 전체에서 걔네 하나 밖에 없기 때문에 찾는 함수 안 써도 됨.
// 태그 삽입 함수들은 기본적으로 기존 태그를 삭제한 후 해당 위치로 넣음.
second.after(first);


// 태그 복사
// true : 자손들까지 복사가 됨.
// false : 해당 태그만 복사가 됨.
const ol2 = ol.cloneNode(false);
document.body.append(ol2);
