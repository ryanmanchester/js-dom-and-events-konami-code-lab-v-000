const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let i = 0;
function init() {
  document.body.addEventListener('keydown', function(e) {
    let key = parseInt(e.which);
    if (key === code[i]) {
      i++;
      if (i === code.length) {
        alert('Konami code entered!')
      }

    } else {
      i = 0;
    }
  })
}
init();
