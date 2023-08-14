// add event listener to submit button
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // get element
  const emialField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const modalText = document.getElementById("modal-text");

  // get value
  const email = emialField.value;
  const password = passwordField.value;

  //   Authencaltion to login
  if (email === "kamrulhasan@gmail.com" && password === "kamrul") {
    location.href = "account.html";
  } else {
    modalText.innerText = "Email or password is invalid!";
    my_modal_2.showModal();
  }
  emialField.value = "";
  passwordField.value = "";
});
