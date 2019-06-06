const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let i = 0;
  document.body.addEventListener('keydown', function(e) {
    let key = parseInt(e.which || e.detail);
    if (key === code[i]) {
        i++;
        if (i === code.length) {
            alert('Konami code entered!');
        }
    } else {
      i = 0;
    }
});
}
init();
