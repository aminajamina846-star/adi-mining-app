* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

body {
  background-color: #080b11;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
}

.app-container {
  width: 100%;
  max-width: 440px;
  height: 100vh;
  background: radial-gradient(circle at top, #1e1035 0%, #080b11 70%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 18px;
  position: relative;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  padding: 10px 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 14px;
  color: #000;
}

.user-details {
  display: flex;
  flex-direction: column;
}

#user-name {
  font-weight: 700;
  font-size: 13px;
  color: #f3f4f6;
}

.user-badge {
  font-size: 9px;
  color: #f59e0b;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.wallet-btn {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  transition: transform 0.2s;
}

.wallet-btn:active {
  transform: scale(0.95);
}

/* Balance Card */
.balance-card {
  text-align: center;
  margin-top: 15px;
}

.balance-label {
  font-size: 11px;
  color: #9ca3af;
  letter-spacing: 1.5px;
  font-weight: 700;
}

.balance-amount {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 8px;
  margin-top: 4px;
}

#balance {
  font-size: 42px;
  font-weight: 800;
  background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.token-symbol {
  font-size: 18px;
  font-weight: 800;
  color: #f59e0b;
}

/* Mining Coin Section */
.mining-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

.coin-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.glow-ring {
  position: absolute;
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(0, 0, 0, 0) 70%);
  animation: pulse 3s infinite ease-in-out;
}

.coin-circle {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fbbf24 0%, #d97706 60%, #78350f 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 35px rgba(245, 158, 11, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.coin-circle:active {
  transform: scale(0.92);
}

.coin-img {
  width: 125px;
  height: 125px;
  filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.12); opacity: 1; }
}

.claim-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border: none;
  border-radius: 16px;
  color: #000;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.35);
  transition: all 0.2s;
}

.claim-btn:active {
  transform: scale(0.98);
}

.claim-btn:disabled {
  background: #1e293b;
  color: #64748b;
  box-shadow: none;
  cursor: not-allowed;
}

.timer-text {
  margin-top: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #38bdf8;
}

/* Navigation Bar */
.nav-bar {
  display: flex;
  justify-content: space-around;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(15px);
  padding: 10px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #64748b;
  cursor: pointer;
  padding: 6px 16px;
  border-radius: 12px;
  transition: all 0.2s;
}

.nav-icon {
  font-size: 18px;
}

.nav-label {
  font-size: 11px;
  font-weight: 700;
}

.nav-item.active {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
}
