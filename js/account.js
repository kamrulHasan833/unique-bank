// Add deopsit
document.getElementById("deposit-form").addEventListener("submit", (e) => {
  e.preventDefault();
  //   get element
  const deposit = document.getElementById("deposit");
  const balance = document.getElementById("balance");
  const depositInput = document.getElementById("deposit-input");
  const depositButton = document.getElementById("deposit-button");
  const modalText = document.getElementById("modal-text");

  //   previous amount
  const preDeposit = parseFloat(deposit.innerText);
  const preBalance = parseFloat(balance.innerText);

  // present amount
  const newDeposite = parseFloat(depositInput.value);

  //   Validation input amount
  if (newDeposite) {
    deposit.innerText = preDeposit + newDeposite;
    balance.innerText = preBalance + newDeposite;
  } else {
    modalText.innerText = "Please provide deposit amount!";
    depositButton.onclick = my_modal_2.showModal();
  }
  depositInput.value = "";
});

// add withdraw
document.getElementById("withdraw-form").addEventListener("submit", (e) => {
  e.preventDefault();
  //   get element
  const withdraw = document.getElementById("withdraw");
  const balance = document.getElementById("balance");
  const withdrawInput = document.getElementById("withdraw-input");
  const modalText = document.getElementById("modal-text");

  //   previous amount
  const preWithdraw = parseFloat(withdraw.innerText);
  const preBalance = parseFloat(balance.innerText);

  // present amount
  const newWithdraw = parseFloat(withdrawInput.value);

  //   Validation input amount
  if (newWithdraw) {
    if (preBalance >= newWithdraw) {
      withdraw.innerText = preWithdraw + newWithdraw;
      balance.innerText = preBalance - newWithdraw;
    } else {
      modalText.innerText = "You can't withdraw excess of your balace!";
      my_modal_2.showModal();
    }
  } else {
    modalText.innerText = "Please give withdraw amount!";
    my_modal_2.showModal();
  }
  withdrawInput.value = "";
});
