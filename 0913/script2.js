// 함수
// function 함수이름() {
//   함수실행코드
// }

let name = "홍길동"; // 전역 변수라 다른 함수 안에서 사용 가능.

function msg() {//얘는 만들어만 놓거임. 호출을 해야 사용 가능.
  let message = "안녕하세요";
  name = "유재석" // let으로 변수 선언하면 얘는 지역변수이기 때문에 전역변수가 바뀌지는 않음.
  console.log(name + ' ' + message);
}

console.log(name);
msg();
console.log(name); // 전역변수가 유재석으로 바뀌었기 때문에 유재석으로 출력

// 함수 선언문
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(10, 20)); // 얘가 선언문 위에 있어도 잘 나옴. 구조가 달라서 그럼.
//자바 스크립트를 실행할때 함수 먼저 다 읽고 등록해놓은 다음에 코드가 실행되기 때문에 그럼



// 함수 표현식
let mul = function(num1, num2) { // let mul을 빼고 보면 얘는 함수 이름이 없으므로 익명 함수라고 함.
  // 이름이 없는데 만들어진 함수는 사용해야하기 때문에 변수 안에 함수를 넣은거임.
  return num1 * num2;
}

console.log(mul(10,20)) // 얘를 표현식 위에다가 놓으면 에러뜸. 함수가 그 함수를 변수에 넣은 거라
// 함수로 인식을 안함.

let age = 20;

if(age >= 20) {
  function msg() {
    console.log("안녕하세요")
  }
} else {
  function msg() {
    console.log('안녕')
  }
}

msg(); //원래 얘는 호출이 안 되어야 함. 자바스크립트라 가능한거임. 엄격모드로 들어가면 안됨. 각각의 함수는 그 영역 안에서만 사용 가능하기 때문에 안 되는 거임.
//근데 표현식을 쓰면 함수를 넣을 변수를 if문 밖에다가 선언하면 전역변수가 되므로 이렇게 호출 가능임.


// 콜백 함수
function yesOrNo(yes, no) {
  if(confirm('예아니오 선택'))
    yes();
  else
    no();
}

function ok() {
  console.log("오케이")
}
function cancel() {
  console.log("노")
}

yesOrNo(ok, cancel); // 특정 함수에 매개변수로 보내주는 함수를 콜백함수라고 함.


// 화살표 함수<애로우 함수, 람다> //얘는 function 키워드가 필요없음.
let sum = (num1, num2) => {
  return num1 + num2;
}

let sum2 = function(num1,num2) {
  return num1 + num2;
} // 이 두개 기능 똑같음.

console.log(sum(10,20));




// 객체(Object) - 파이썬(딕셔너리), 자바(map)
const user = { // 얘는 key에 '' 안 붙여줘도 됨.
  'name' : '홍길동',
  'age' : 20,
  'math score' : 90 // js는 띄어쓰기를 해도 인식 잘 되지만 이렇게 안 쓰는게 좋음.
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user["math score"]) // 띄어쓰기 있으면 이렇게 해줘야함.

user.name = "유재석";
console.log(user);

// const는 상수인데 내용이 바뀜
// 자바스크립트에서는 상수로 값이 딱 지정되어있으면 당연히 못 바꾸지만 저렇게 오브젝트 형태로 되어있을때는 구조만 못 바꿀 뿐 내용물은 바꿀 수 있음.

let str = 'name';
console.log(user.str); //이렇게 하면 name으로 찾는게 아니라 str이 있는지 없는지를 찾음. 그래서 못 찾는다고 나옴.
console.log(user[str]) //하지만 이렇게 하면 저 [] 안에는 ''를 찍고 내용을 쓰는 공간이기 때문에 변수로 인식하여 잘 찾아줌.

str = 'lang';

let study = {
  [str] : 'java' // 변수에 들어가 있는걸 key로 사용 가능. [] 붙여줘함.
}

console.log(study);

function mkObject(name, age) {
  return {
    // name: name,
    // age: age
    name,
    age // 이렇게 축약해서 사용 가능. 변수명과 key 이름이 일치하면 사용 가능.
  }
}

let hong = mkObject('홍길동', 20);
console.log(hong);

console.log('name' in hong); // in을 쓰면 해당 글자가 해당 변수에 있는지 찾아줌.

for(let key in hong) {
  console.log(key, hong[key]);
}