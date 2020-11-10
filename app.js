const c = console.log;
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const card = document.querySelectorAll('.main-currency-table');

nextBtn.addEventListener('click', function() {
  card.forEach(function(item) {
    item.classList.toggle('active');
  })
})

prevBtn.addEventListener('click', function() {
  card.forEach(function(item) {
    item.classList.toggle('active');
  })
})
