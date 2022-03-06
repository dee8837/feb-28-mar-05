function popup() {
  var a = document.getElementById("popup");

  // a.classList.remove("#popup")

  a.classList.add("initial");
}

function close_popup() {
  var b = document.getElementById("popup");

  b.classList.remove("initial");

  b.classList.remove("d-none");
}
