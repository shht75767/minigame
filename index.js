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
init();
