const slider = document.getElementById('js-myRange');
const views = document.getElementById('js-views');
const price = document.getElementById('js-price');
const billing = document.getElementById('js-billing');
const ranges = ['10K', '50K', '100K', '500K', '1M'];
const prices = [8, 12, 16, 24, 36];

views.textContent = ranges[slider.value];

const displayPrice = function () {
  price.textContent = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(
    billing.checked ? prices[slider.value] * 0.75 : prices[slider.value]
  );
};

slider.addEventListener('input', function () {
  views.textContent = ranges[this.value];
  displayPrice();

  // Progress bar color
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = `linear-gradient(to right, var(--Soft-Cyan) 0%, var(--Soft-Cyan) ${value}%, var(--Light-Grayish-Blue) ${value}%, var(--Light-Grayish-Blue) 100%)`;
});

billing.addEventListener('click', displayPrice);
