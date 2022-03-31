const gameField = document.querySelector('.game__field');
const popUpText = document.querySelector('.pop-up__message');
const fieldRect = gameField.getBoundingClientRect();
const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;
const popUp = document.querySelector('.pop-up');

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const returnPopup = document.querySelector('.pop-up');
const returnBtn = document.querySelector('.pop-up__button');

let started = false;
let score = 0;
let timer = undefined;

gameField.addEventListener('click', onFieldClick);

gameBtn.addEventListener('click', () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});

returnBtn.addEventListener('click', () => {
  startGame();
  hidePopUp();
});
function startGame() {
  started = true;
  init();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
}

function stopGame() {
  started = false;
  stopGameTimer();
  hideGameBtn();
  showPopUpWithText('REPLAY❓');
}
function hideGameBtn() {
  gameBtn.style.visibility = 'hidden';
}

function hidePopUp() {
  popUp.style.visibility = 'hidden';
}
function showPopUpWithText(text) {
  popUpText.innerText = text;
  returnPopup.style.visibility = 'visible';
}
function startGameTimer() {
  let timeRemaining = GAME_DURATION_SEC;
  updateTimer(timeRemaining);
  timer = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer);
      finishGame(CARROT_COUNT === score);
      return;
    }
    updateTimer(--timeRemaining);
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timer);
}

function finishGame(win) {
  started = false;
  hideGameBtn();
  showPopUpWithText(win ? 'You Win !' : 'You Lose');
}

function updateTimer(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}

function showStopButton() {
  const icon = gameBtn.querySelector('.fas');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
}

function showTimerAndScore() {
  gameTimer.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
}
function init() {
  gameField.innerHTML = '';
  gameScore.innerText = CARROT_COUNT;
  addItem('carrot', CARROT_COUNT, 'img/carrot.png');
  addItem('bug', BUG_COUNT, 'img/bug.png');
}

function onFieldClick(event) {
  if (!started) {
    return;
  } else {
  }
  const target = event.target;
  if (target.matches('.carrot')) {
    target.remove();
    ++score;
    gameScore.innerText = score;
    updateScore(score);
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (target.matches('.bug')) {
    stopGameTimer();
    finishGame(false);
  }
}

function updateScore(score) {
  gameScore.innerText = CARROT_COUNT - score;
}
function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;
  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    gameField.appendChild(item);
  }
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
