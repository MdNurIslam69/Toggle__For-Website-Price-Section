let t = 1;
let toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  if (t == 1) {
    t = 2;
    toggle.classList.remove("left-0");
    toggle.classList.add("right-0");
  } else {
    t = 1;
    toggle.classList.remove("right-0");
    toggle.classList.add("left-0");
  }

  let price = document.getElementsByClassName("price");

  if (t == 1) {
    price[0].innerHTML = "$99/m";
    price[1].innerHTML = "$199/m";
    price[2].innerHTML = "$299/m";
  } else {
    price[0].innerHTML = "$699/y";
    price[1].innerHTML = "$899/y";
    price[2].innerHTML = "$999/y";
  }
});
