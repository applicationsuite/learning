const hello = () => {
  document.write("Wellcome");
};
const hello1 = () => {
  alert("Welcome");
};
const hello3 = () => {
  d = new Date().toLocaleTimeString();
  document.getElementById("a").innerHTML = d;

  document.querySelector("#a").onclick = abc;
  function abc() {
    document.querySelector("#a").style.background = "yellow";
    document.querySelector("#a").style.color = "green";
    document;
  }
};
// const a = setInterval(abcd, 1000);
// const b = setInterval(efgh, 2000);

document.querySelector("#a").onmouseenter = abcd;
document.querySelector("#a").onmouseout = efgh;

function abcd() {
  document.querySelector("#a").style.background = "black";
}

function efgh() {
  document.querySelector("#a").style.background = "pink";
}

document.querySelector("#a").style.color = "red";
document.querySelector("#a").className = "r";
document.querySelector(".r").style.backgroundColor = "green";

// document.querySelector("#a").onclick=abc;

// function abc(){
//     document.querySelector("#a").style.backgroundColor="yellow"

// }
