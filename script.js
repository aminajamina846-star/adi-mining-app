const tg = window.Telegram ? window.Telegram.WebApp : null;

if (tg) {
  tg.expand();
  const user = tg.initDataUnsafe?.user;
  if (user) {
    document.getElementById('user-name').innerText = user.first_name || "User";
  } else {
    document.getElementById('user-name').innerText = "Guest User";
  }
} else {
  document.getElementById('user-name').innerText = "Browser User";
}

let balance = parseFloat(localStorage.getItem('adi_balance')) || 0;
let lastClaimTime = parseInt(localStorage.getItem('adi_last_claim')) || 0;
const rewardAmount = 100;
const cooldownTime = 24 * 60 * 60 * 1000;

document.getElementById('balance').innerText = balance.toFixed(2);

function updateUI() {
  const now = Date.now();
  const timePassed = now - lastClaimTime;
  const claimBtn = document.getElementById('claim-btn');
  const timerText = document.getElementById('timer');

  if (timePassed >= cooldownTime) {
    claimBtn.disabled = false;
    claimBtn.innerText = "CLAIM DAILY REWARD (+100 $ADI)";
    timerText.innerText = "";
  } else {
    claimBtn.disabled = true;
    const remainingTime = cooldownTime - timePassed;
    
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    claimBtn.innerText = "CLAIMED FOR TODAY";
    timerText.innerText = `Next claim in: ${hours}h ${minutes}m ${seconds}s`;
  }
}

function claimTokens() {
  const now = Date.now();
  if (now - lastClaimTime >= cooldownTime) {
    balance += rewardAmount;
    lastClaimTime = now;

    localStorage.setItem('adi_balance', balance);
    localStorage.setItem('adi_last_claim', lastClaimTime);

    document.getElementById('balance').innerText = balance.toFixed(2);
    alert(`Successfully claimed ${rewardAmount} $ADI tokens!`);
    updateUI();
  }
}

function connectWallet() {
  alert("Wallet connection module will be linked to Trust Wallet on Testnet/Mainnet launch!");
}

setInterval(updateUI, 1000);
updateUI();
  
