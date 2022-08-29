// HIDDEN MODAL
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.open-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnOpenModal.addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// SLIDERS
const spanOne = document.getElementById('span-one');
const spanTwo = document.getElementById('span-two');
const spanThree = document.getElementById('span-three');
const sliderOne = document.getElementById('slider-one');
const sliderTwo = document.getElementById('slider-two');
const sliderThree = document.getElementById('slider-three');
const recPriceOne = document.querySelector('.rec-price-one');
const recPriceTwo = document.querySelector('.rec-price-two');
const recPriceThree = document.querySelector('.rec-price-three');

sliderOne.oninput = function () {
  spanOne.innerHTML = sliderOne.value;
  if (sliderOne.value == 60) {
    recPriceOne.classList.remove('hidden');
  } else {
    recPriceOne.classList.add('hidden');
  }
};
sliderTwo.oninput = function () {
  spanTwo.innerHTML = sliderTwo.value;
  if (sliderTwo.value == 360) {
    recPriceTwo.classList.remove('hidden');
  } else {
    recPriceTwo.classList.add('hidden');
  }
};
sliderThree.oninput = function () {
  spanThree.innerHTML = sliderThree.value;
  if (sliderThree.value == 720) {
    recPriceThree.classList.remove('hidden');
  } else {
    recPriceThree.classList.add('hidden');
  }
};
