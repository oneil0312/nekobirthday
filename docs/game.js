// 定義球物件
document.addEventListener('DOMContentLoaded', function () {
  var redBall = document.getElementById('redBall');

  function startGame() {
    redBall.style.animationPlayState = 'running';
  }

  redBall.addEventListener('click', startGame);
});
var ball = {
  x: 200, // 球的初始 x 位置
  y: 300, // 球的初始 y 位置
  radius: 30, // 球的半徑
  dx: 0, // 球在 x 軸上的速度
  dy: 0, // 球在 y 軸上的速度
};

// 獲取畫布和上下文
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

// 監聽滑鼠點擊事件
canvas.addEventListener("click", startGame);

function startGame() {
  // 設定球的初始速度
  ball.dx = 2;
  ball.dy = -2;

  // 停止監聽滑鼠點擊事件
  canvas.removeEventListener("click", startGame);

  // 啟動遊戲循環
  requestAnimationFrame(gameLoop);
}

function gameLoop() {
  // 清空畫布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 繪製球
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  // 更新球的位置
  ball.x += ball.dx;
  ball.y += ball.dy;

  // 球碰到最下緣時遊戲結束
  if (ball.y + ball.radius >= canvas.height) {
    gameOver();
  } else {
    // 繼續遊戲循環
    requestAnimationFrame(gameLoop);
  }
}

function gameOver() {
  // 顯示遊戲結束訊息
  alert("Game Over");
}
