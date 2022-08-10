/**
 * @author san randry
 * @license MIT license
 * this plugin disable all inspect element feature on a web browser
 */
// disable right click
document.oncontextmenu = function (e) {
  e.preventDefault();
  return false;
}
// disable somme additional key
document.onkeydown = function (e) {
  // disable f12
  if (e.keycode == 123) {
      return false;
  }
  // disable ctrl+shift+I
  if (e.ctrlKey && e.shiftKey && e.keycode == 'i'.charCodeAt(0)){
      return false;
  }
  // disable ctrl+shift+C
  if (e.ctrlKey && e.shiftKey && e.keycode == 'C'.charCodeAt(0)){
      return false;
  }
  // disable ctrl+shift+j
  if (e.ctrlKey && e.shiftKey && e.keycode == 'J'.charCodeAt(0)){
      return false;
  }
  // disable ctrl+shift+U
  if (e.ctrlKey && e.keycode == 'U'.charCodeAt(0)) {
      return false;
  }
}