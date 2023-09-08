'use strict';

const x1El = document.querySelector('#score--0');
const x2El = document.querySelector('#score--1');
const dcEl = document.querySelector('.dice');
const p1El = document.querySelector('.player--0');
const p2El = document.querySelector('.player--1');
const c1El = document.getElementById('current--0');
const c2El = document.getElementById('current--1');
const nEl = document.querySelector('.btn--new');

const bhdEl = document.querySelector('.btn--hold');

const sap = function () {
  document.getElementById(`current--${ap}`).textContent = 0;
  csc = 0;
  ap = ap === 0 ? 1 : 0;
  p1El.classList.toggle('player--active');
  p2El.classList.toggle('player--active');
};

let scs, csc, ap, pl;

const init = function () {
  x1El.textContent = 0;
  x2El.textContent = 0;
  scs = [0, 0];
  csc = 0;
  ap = 0;
  pl = true;
  c2El.textContent = 0;
  c1El.textContent = 0;
  p1El.classList.remove('player--winner');
  p2El.classList.remove('player--winner');
  p1El.classList.add('player--active');
  p2El.classList.remove('player--active');
  dcEl.classList.add('hidden');
};

init();

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (pl) {
    const rn = Math.trunc(Math.random() * 6) + 1;
    dcEl.src = `dice-${rn}.png`;
    dcEl.classList.remove('hidden');

    if (rn !== 1) {
      csc += rn;
      document.getElementById(`current--${ap}`).textContent = csc;
    } else {
      sap();
    }
  }
});

bhdEl.addEventListener('click', function () {
  if (pl) {
    scs[ap] += csc;
    document.getElementById(`score--${ap}`).textContent = scs[ap];
    if (scs[ap] >= 100) {
      pl = false;
      document.querySelector(`.player--${ap}`).classList.add('player--winner');
      document
        .querySelector(`.player--${ap}`)
        .classList.remove('player--active');
      dcEl.classList.add('hidden');
    } else {
      sap();
    }
  }
});

nEl.addEventListener('click', function () {
  init();
});
