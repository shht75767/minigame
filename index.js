const gameField = document.querySelector('.game__field');
const fieldRect = gameField.getBoundingClientRect();

console.log(fieldRect);
function init() {
  console.log(fieldRect);
  addItem('carrot', 5, 'carrot/img/carrot.png');
  addItem('bug', 5, 'carrot/img/bug.pbg');
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width;
  const y2 = fieldRect.height;
}
for (let i = 0; i < count; i++) {
  const item = document.createElement('img');
  item.setAttribute('class', className);
  item.setAttribute('src', imgPath);
  item.style.position = 'absolute';
  const x = ramdomNumber(x1, x2);
}
init();
