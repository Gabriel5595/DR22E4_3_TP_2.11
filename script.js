const item = document.body.children[0];

function troca(){
  item.children[1].classList.toggle('card');
  item.children[2].classList.toggle('card');
  item.style.background = 'blue';
}