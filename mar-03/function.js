function color_changer() {
  function color_changer() {
    var body = document.body;
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
    }
     else {
      body.classList.remove("dark");
      body.classList.add("light");
    }
  }
}

function hidePopup() {
  var unsb = document.getElementsByClassName('popup')[0];
  unsub.classList.add("d-none");
}
