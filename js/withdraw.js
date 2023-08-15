// add withdraw
document.getElementById("withdraw-form").addEventListener("submit", (e) => {
  e.preventDefault();
  //   previous amount
  const preWithdraw = getElementTextById("withdraw");
  const preBalance = getElementTextById("balance");

  // present amount
  const newWithdraw = getInputValueById("withdraw-input");

  //   Validation input amount
  if (newWithdraw) {
    if (preBalance >= newWithdraw) {
      setElementTextById("withdraw", preWithdraw + newWithdraw);
      setElementTextById("balance", preBalance - newWithdraw);
    } else {
      setElementTextById(
        "modal-text",
        "You can't withdraw excess of your balace!"
      );
      my_modal_2.showModal();
    }
  } else {
    setElementTextById("modal-text", "Please give withdraw amount!");
    my_modal_2.showModal();
  }
});
