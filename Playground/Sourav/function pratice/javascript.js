function login(type, val) {
  document.write(`<input type=${type} value=${val}> <br/>`);
}

login("button", "register");
login("checkbox");
login("radio");
login("date", "2002-05-05");
login("color", "#ff0000");
login("type", "Hello");
login("type", "yryyr");

document.querySelector("#hello").innerHTML = "<b>Sourav Kumar Dash</b><br/>";
document.querySelector("body").style.backgroundColor="green"
document.querySelector("#hello").style.color = "Black";
