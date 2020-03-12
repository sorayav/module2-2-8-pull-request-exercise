'use strict';

const face = document.querySelector('.face');
const head = document.querySelector('.head');
head.addEventListener('click', function smile() {face.innerHTML = ';)';});
head.addEventListener('mouseout', function smileOut() {face.innerHTML = ':)';});