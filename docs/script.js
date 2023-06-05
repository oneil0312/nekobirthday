// 倒數日期（2023/06/23）
var countdownDate = new Date('2023-06-23').getTime();

// 更新倒數計時器
function updateCountdown() {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = padZero(days);
  document.getElementById('hours').textContent = padZero(hours);
  document.getElementById('minutes').textContent = padZero(minutes);
  document.getElementById('seconds').textContent = padZero(seconds);

  if (distance <= 0) {
    // 倒數計時結束時的操作
    clearInterval(countdownInterval);
    // 跳轉到生日慶祝頁面
    window.location.href = 'HB.html';
  }
}

// 補零函數（小於10的數字前補零）
function padZero(number) {
  return (number < 10) ? '0' + number : number;
}

// 更新倒數計時器間隔（每秒更新一次）
var countdownInterval = setInterval(updateCountdown, 1000);

// 獲取元素
const birthdayButton = document.getElementById('birthday-button');
const birthdayMessage = document.getElementById('birthday-message');

// 定義生日祝福訊息的陣列
const birthdayMessages = [
  '喵OWO!!',
  '喵喵owo!!',
  '^ↀᴥↀ^！',
  "'(=｀ω´=)'",
  'ฅ^•ﻌ•^ฅ',
];

// 定義觸發效果的函數
function triggerBirthdayEffect() {
  // 隨機選取一個生日祝福訊息
  const randomIndex = Math.floor(Math.random() * birthdayMessages.length);
  const selectedMessage = birthdayMessages[randomIndex];

  // 重置訊息的狀態
  birthdayMessage.innerText = selectedMessage;
  birthdayMessage.style.display = 'block';
  birthdayMessage.classList.add('animated-text');

  // 設定定時器，在 2 秒後隱藏訊息
  setTimeout(function() {
    birthdayMessage.style.display = 'none';
    birthdayMessage.classList.remove('animated-text');
  }, 3000);
}

// 綁定點擊事件處理函數
birthdayButton.addEventListener('click', function() {
  // 呼叫觸發效果的函數
  triggerBirthdayEffect();
});



