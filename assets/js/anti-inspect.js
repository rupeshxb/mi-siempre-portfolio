/*
 * this plugin disable all inspect element feature on a web browser
 */

// disable right click
document.oncontextmenu = function (e) {
  e.preventDefault();
  alert("Action Denied");
  return false;
}

// disable somme additional key
document.onkeydown = function (e) {
  // disable f12
  if (e.keycode == 123) {
    e.preventDefault();
    alert("Action not allowed")
      return false;
  }
  var countPressZ=0;
  while(e.key='z'){
    countPressZ++;
  }
  console.log(countPressZ);
  // disable ctrl+shift+I
  if (e.ctrlKey && e.shiftKey && (e.key=='I' || e.key=='i')){
      e.preventDefault();
      alert("Denied to inspect.");
      return false;
  }
  
  // disable ctrl+shift+C
  if (e.ctrlKey && e.shiftKey && (e.key=='c' || e.key=='C')){
    e.preventDefault();
    alert("Action not allowed");
    return false;
}
  // disable ctrl+shift+j
  if (e.ctrlKey && e.shiftKey && (e.key=='J' || e.key=='j')){
    e.preventDefault();
    alert("Action not allowed");
    return false;
}
  // disable ctrl+shift+U
  if (e.ctrlKey && e.shiftKey && (e.key=='u' || e.key=='U')){
    e.preventDefault();
    alert("Action not allowed");
    return false;
  }
}