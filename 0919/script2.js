// console.log(document.body.childNodes); // node는 태그들이라고 생각하면 됨. html body에 있는 자식태그들 좀 찍어주셈이 됨.

for(let i=0; i<document.body.childNodes.length; i++) {
  console.log(document.body.childNodes[i]);
} // 이렇게 하면 h1태그는 script태그 밑에 있기 때문에 걔까지 안 읽혀옴.

console.log(document.body.parentNode); // 부모 태그를 말함. body의 부모 태그는 html이므로 거기에 관련된 것들이 쭉 나옴.
console.log(document.body.nextSibling); // 이렇게 하면 body 태그의 다음 형제 태그를 말하는 건데 없으므로 null이 뜸.
console.log(document.body.previousSibling); // 이렇게 하면 body 태그의 전 형제 태그인 head태그를 말하는 거임.

for(let node of document.body.childNodes) { // in을 쓸지 of를 쓸지는 상황에 따라 다름.
  console.log(node); // node들을 불러올때는 in을 안 씀. 숫자만 나옴. 그래서 of를 써야 제대로 잘 나옴.
}

//근데 보통 태그명으로 접근 하지는 않음.


const s = document.getElementById('start'); // Id를 이용해서 검색해주는 함수. 보통 상수로 선언함. 이럴때는 대문자로 안 쓰고 소문자로 씀.
console.log(s);
s.style.background = 'skyblue';
s.style.color = 'white';

document.getElementById('start').style.background = 'skyblue'; // 이렇게 해도 쓸 수 있으나 이렇게 안 씀. 불편하기도 하고 id찾는 과정을 계속 거침.

const li = document.querySelectorAll('ul > li'); // 선택자를 넣어줘야함.
//선택자를 이용해서 선택자에 해당하는 요소들을 전부다 가져옴.
console.log(li[0]);
console.log(li[1]);
li[0].innerHTML = 'aaaa' // 이렇게 하면 해당 내용이 바뀜.

const end = document.querySelector('.end'); // 선택자를 넣어 해당하는 거 하나만 가져옴. 여러개 일때는 처음거 하나만 가져옴.
console.log(end);