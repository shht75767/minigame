const gameField = document.querySelector('.game__field');
const fieldRect = gameField.getBoundingClientRect();

console.log(fieldRect);
function init() {
  console.log(fieldRect);
  addItem('carrot', 5, 'carrot/img/carrot.png');
  addItem('bug', 5, 'carrot/img/bug.pbg');
}

function addItem(className, count, imgPath) {}
init();
