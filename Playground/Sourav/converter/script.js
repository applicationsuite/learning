let feet = document.getElementById("feet");
let inch = document.getElementById("inch");

feet.addEventListener("input", function () {
  let f = this.value;
  let c = f * 12;
  if (!Number.isInteger(c)) {
    c = c.toFixed(2);
  }
  inch.value = c;
});

inch.addEventListener("input", function () {
  let c = this.value;
  let f = c / 12;
  if (!Number.isInteger(f)) {
    f = f.toFixed(2);
  }
  feet.value = f;
});

const a = () => {
  document.querySelector(".myImage").src = "pic_bulbon.gif";
};
const b = () => {
  document.querySelector(".myImage").src = "pic_bulboff.gif";
};

// document.querySelector("#container").setAttribute("class", "xyz");
// document
//   .querySelector("#container")
//   .setAttribute("style", "border:3px solid green");
// document.querySelector("#container").removeAttribute("style");

// element = document.querySelector("#container").getAttribute("style");

var element;
document.querySelector("#container").style.backgroundColor = "green";
element = document.querySelector("#container").style.color;
console.log(element);
