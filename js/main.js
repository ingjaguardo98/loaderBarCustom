(function Initialproc(){
  'use strict'
  let photofinish = false;

  // ir mostrando en tiempo random las imagenes
  function showPhoto(i,m) {
    setTimeout(() => {
      let namepht = "pht" + i
      document.getElementById(namepht).style = "display:flex;";
      
      i++;
      if (i>8) {photofinish=true; return true;}
      let delay = Math.floor(Math.random() * (1500 - 100)) + 100;
      showPhoto(i,delay);
    }, m);
  }

  // la barra va avanzando de manera random
  function moveBar(width,m) {
    setTimeout(() => {
    document.getElementById("loaderbar").style.width = width + '%';
    width++;
    if (width>100) return true;
    let delay;
    if (photofinish) {
      delay = 1;
    } else {
      delay = Math.floor(Math.random() * (200 - 1)) + 1;
    }
    console.log(photofinish);
    moveBar(width,delay);
    }, m);
  }

  showPhoto(1,1000);
  moveBar(1,200);


})(window,document);
