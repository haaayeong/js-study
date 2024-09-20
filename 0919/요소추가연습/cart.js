let list = localStorage.getItem('name'); // list는 Key가 name인 배열이 들어가 있는 형태임.
list = JSON.parse(list);

list.forEach((data) => {
  $('.list').append(`<div>${data.name} : ${data.cnt}</div>`);//로컬스토리지에서 가져올거라고 생각해서 막힌듯. 그냥 배열에 있는 거 불러오면 됨.
});