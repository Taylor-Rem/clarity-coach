// SLIDER
const slider = document.querySelector('.slider');
const output = document.getElementById('value');
const valueContainer = document.querySelector('.paragraph');

output.innerHTML = slider.value;

// slider.oninput = function () {
//   output.innerHTML = this.value;
// };

// SELECT
const select = document.getElementById('sessions-selector');
const sliderValue = document.getElementById('session-value');

function getSelectValue() {
  let selectedValue = select.value;
  console.log(selectedValue);

  if (selectedValue === 'no-session') {
    slider.classList.add('hidden');
    valueContainer.classList.add('hidden');
  } else {
    slider.classList.remove('hidden');
    valueContainer.classList.remove('hidden');
  }
  if (selectedValue === 'one-session') {
    slider.min = 30;
    slider.max = 90;
    output.innerHTML = 60;
    slider.value = 60;
    slider.step = 5;
  } else if (selectedValue === 'six-sessions') {
    slider.min = 180;
    slider.max = 540;
    output.innerHTML = 360;
    slider.value = 360;
    slider.step = 5;
  } else if (selectedValue === 'twelve-sessions') {
    slider.min = 360;
    slider.max = 1080;
    output.innerHTML = 720;
    slider.value = 720;
    slider.step = 10;
  }

  slider.oninput = function () {
    sliderValue.innerHTML = slider.value;
    output.innerHTML = this.value;
  };
}
