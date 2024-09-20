const tabBtns = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

for(let i=0; i<tabBtns.length; i++) {
  tabBtns[i].addEventListener('click', () => {
    for(let i=0; i<tabBtns.length; i++) {
      tabBtns[i].classList.remove('select');
      tabContents[i].classList.remove('show');
    }

    tabBtns[i].classList.add('select');
    tabContents[i].classList.add('show');
  })
}
