// Add deopsit
document.getElementById("deposit-form").addEventListener("submit", (e) => {
  e.preventDefault();
  //   previous amount
  const preDeposit = getElementTextById("deposit");
  const preBalance = getElementTextById("balance");

  // present amount
  const newDeposite = getInputValueById("deposit-input");

  //   Validation input amount
  if (newDeposite) {
    setElementTextById("deposit", preDeposit + newDeposite);
    setElementTextById("balance", preBalance + newDeposite);
  } else {
    setElementTextById("modal-text", "Please provide deposit amount!");
    my_modal_2.showModal();
  }
});
