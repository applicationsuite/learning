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

var element;
element = document.getElementById("container").getAttribute;
console.log(element)

