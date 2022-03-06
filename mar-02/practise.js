var counter = 0;
function like() {
  counter += 1;
  render();
}
function dislike() {
  counter -= 1;
  render();
}
function render() {
  var disp = document.getElementById("op _text")[0];
  disp.innerText = counter;
}

