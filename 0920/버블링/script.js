document.querySelector('a').addEventListener('click', (e) => {

  e.preventDefault(); // 기본동작 막기. 지금 상황에서는 href로 안 넘어가짐.
  e.stopPropagation(); // 버블링을 막아줌.
  alert('a태그');
})