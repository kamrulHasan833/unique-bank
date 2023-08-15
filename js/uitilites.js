// function for get input value by id
function getInputValueById(id) {
  const input = document.getElementById(id);
  const inputValue = parseFloat(input.value);
  input.value = "";
  return inputValue;
}
// function for get element text by id
function getElementTextById(id) {
  const element = document.getElementById(id);
  const textValue = parseFloat(element.innerText);
  return textValue;
}
// function for set element text by id and text
function setElementTextById(id, text) {
  const element = document.getElementById(id);
  element.innerText = text;
}
