
'use strict';

const face = document.querySelector('.face');
const head = document.querySelector('.head');

  function smile () {
      face.innerHTML = ';)';
  }

  function smileOut () {
    face.innerHTML = ':)';
}

 head.addEventListener('click', smile);
 head.addEventListener('mouseover', smileOut);