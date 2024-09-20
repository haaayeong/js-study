let user = {
  name: 'hong',
  age : 20,
};

user.hello = function() {//이런식으로 함수를 넣어서 객체 안에 함수를 넣을 수 있음.
  console.log('hello');
};

user.hello();

function hi() {
  console.log('hi');
}

user.hello = hi; // 위에 만들어져 있는 함수를 이렇게 하면 객체 안에 넣을 수 있음.
user.hello();

user = {
  // hello: function() { // 해당 키에 함수를 넣은 구조
  // }

  name: 'hong',
  msg() { // 원래는 msg: function() {} 형태로 만드는 건데 뒤에를 생략할 수 있어서 이렇게 씀.
    console.log(this.name); // 자기 객체 안에 들어있는 name을 호출해옴. this 대신에 자기 객체 이름을 써서 사용도 가능.
  },
  age : 20, // 여기 안에 여러 가지를 넣을 때 ,를 꼭 찍어야함. 그래서 마지막도 ,찍으면 헷갈릴 일도 없고 나중에 추가할 때도 편할 듯?
};

user.msg();

let kim = user;
user = null;

kim.msg(); // msg() 안에 console.log(user.name)을 치고 이렇게 적으면 user이 null값이기 때문에 에러가 뜸.
// 하지만 this.name을 하면 user만 null인거지 거기에 있는 객체가 null은 아니기 때문에 kim은 객체를 잘 가르키고 있고 그렇기 때문에 잘 나옴.

kim = {
  name: 'kim',
  age:20,
};

let park = {
  name: 'park',
  age: 30,
};

function himsg() {
  console.log(this.name + "님 안녕하세요");
}

kim.fn = himsg;
park.fn = himsg; // 객체에 포함되지 않은 함수 안에 this를 쓰고 이렇게 안에 넣어주면 잘 나옴.

kim.fn();
park.fn();

// new, 생성자
// 함수명 첫글자가 대문자여야 함.
// 생성할땐 new키워드로 생성

function User(name,age) {
  // this = {}; 가 생략되어 있음.
  this.name = name;
  this.age = age;

  this.hi = function() {
    console.log(`${this.name} 안녕`);
  }
  // return this; 가 생략되어 있음.
}

let lee = new User('lee', 40);
console.log(lee)


// DOM <DOM트리 알면 좋음.>
// JS는 HTML의 요소와 속성 추가, 수정, 삭제 가능
// CSS 추가, 수정, 삭제 가능
// 이벤트 추가 수정 삭제 가능(특정 행동 즉, 클릭, 더블 클릭, 휠 등등)


document.body.style.background = 'skyblue'; // document가 html문서 전체를 가르킴.