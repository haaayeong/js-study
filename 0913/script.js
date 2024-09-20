console.log('hello'); // 얘가 프린트문임. 확인은 해당 페이지 개발자도구 켜서 콘솔창 들어가서 확인 가능.

// 변수 : 파이썬처럼 자료형 관계없이 다 넣을 수 있지만 선언하는 키워드는 필요함.
// 옛날에는 var로 변수 선언했음.
let a = 10;

// 상수
const B = 20; // 대문자로 선언하는 편임.

// 자바 스크립트에서 문자를 작성할 때 "" '' `` 세 개 중 뭐를 하든 상관 없음. 버전에 따라서 마지막 꺼는 안 될 수 있음.
let msg = "js";

console.log("hello" + msg)
console.log('hello' + msg)
console.log(`hello ${msg}`) // 다만 얘는 파이썬의 f 스트링이랑 비슷하게 쓸 수 있음.

console.log(10 / 0); //연산에 관해서는 에러를 띄우지 않음. 실제로 다른애들은 저거 계산이 안 되서 에러 띄웠는데 얘는 Infinity라고 뜨고 타입도 number로 뜸.
//즉, 얘는 에러를 뱉어내지 않고 저거에 관련된 특수 숫자값을 띄움.
console.log(typeof Infinity); // 얘는 콘솔창에 해당 코드의 타입을 띄워줌.

console.log("asds" / 20);
console.log(typeof(NaN)) // 위에처럼 타입 확인해도 되고 얘처럼 타입확인해도 됨. NaN도 특수값임.

// js는 산술연산은 안전함.
// java나 python의 경우는 잘못연산을 하면 에러를 출력하면서 프로그램이 종료
// 하지만 얘는 아님.
// 파이썬은 true false 첫문자가 대문자였는데 자바랑 자바스크립트는 소문자임.

// java에서 NULL은 참조대상 없음.
// js에서는 비어있다, 알 수 없음임.
let b = null;

// undefined : 할당하지 않음.
// java에서는 null이라고 뜨는데 얘는 저렇게 뜸.
let c;
console.log(c);


// 모달(알림창) : 커스텀을 못함. 위치랑 모양 색깔 등 다 고정임.
// alert('aaa') // 단순히 띄워주는 거임. 확인을 누르거나 해야 다음코드로 넘어감.
// console.log('alert 실행 후')

console.log('===============');
let bb = prompt('프롬프트', 200) // 입력창이 있기 때문에 리턴값이 있음. 파이썬 input이랑 똑같음. 입력한 거 무조건 문자로 인식함.
// 프롬프트도 기본값 설정 가능. ,얘 뒤에 기본값 적어주면 됨.
// Number(aa) : 숫자형 변환
console.log(bb);
console.log(typeof bb);

console.log('===============');

let bbb = confirm('예 아니오'); // 얘는 확인, 취소 버튼을 띄워줌.
//확인은 true 취소는 false
console.log(bbb);

// 자료형 변환
// String(11) : 문자로 변환
// Number("11") : 숫자로 변환
console.log("11" - "2"); // 다른 언어들에서는 에러 떴는데 얘는 계산도 되고 타입도 변함.
// 물론 위에 거 +로 쓰면 112로 나옴.
console.log(typeof("11" - "2"));
console.log( Number("asaldkfj") ); //js는 이렇게 하면 에러 안 뱉어내고 NaN을 띄움. 숫자로 바뀌긴 함.
let n;
console.log( Number(n) ); // 원래 같으면 정해준 값이 없기 때문에 형변환이 없어서 에러가 나오는데 얘는 NaN으로 띄워줌.
console.log( Number(null) ); // 이렇게 하면 null이 값이 없기 때문에 값이 없다는 뜻으로 0으로 나옴.
console.log( Number(true) ); // 얘는 1로 나옴.
console.log( Number(false) ); // 얘는 0으로 나옴.

//Boolean(1) : 불린형 변환
console.log(Boolean(" ")); //얘는 글자가 쓰여있으면 true로 나오고 없으면 flase로 나오는데 지금 쟤는 스페이스바가 입력되어있기 때문에 true임.
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN)); // 요 마지막 3개는 모두 false로 나옴.

console.log("==================");
// 논리연산자 - &&, ||, !
console.log(1=="1"); // 자바스크립트는 타입 구분 없이 비교함. 그래서 원래 다른 언어는 숫자랑 문자열이기 때문에 같지 않다고 나옴.
console.log(1==="1"); // 타입 구분해서 비교(엄격버전). 그래서 flase로 나옴.

console.log(1 !="1");
console.log(1 !== "1"); // 웬만하면 요 버전으로 하는게 문제 생길 일이 적음.


// 조건문 
// if (조건식) {
//   참일때
// } else if (조건식2) {
//   조건식2 참
// } else {
//   모두 거짓
// }

//let age = prompt('나이를 입력하세요') // 얘 이렇게만 하면 문자구나...? 바본가...???
// ; 이거도 잊지 말기...
let age = Number( prompt('나이를 입력하세요.'));

if (age >= 20) { // 같냐 같지 않냐 할 때만 = 얘 3개씀.
  console.log('성인입니다.');
} else {
  console.log('청소년입니다.');
}

// 삼항 연산자 : 자바랑 똑같음.
let result = age >= 20 ? "성인" : "청소년";

// switch~case문 (자바랑 똑같음. 대신 자료형 일치해야함)
// switch(변수명) {
//   case 1:

//     break;
//   case 2:

//     break;
//   default:
// }


// 반복문(자바랑 똑같아서 똑같이 활용하면 됨.)
// while(조건식) {
//   반복실행할코드
// }

// for(초기값; 조건식; 증감식) {
//   반복실행할코드
// }
for(let i=1; i<=10; i++) {
  console.log(i);
}