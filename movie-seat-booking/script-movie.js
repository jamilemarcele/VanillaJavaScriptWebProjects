const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// another way to change to number is doing +movieSelect.value
const ticketPrice = parseInt(movieSelect.value);

container.addEventListener('click', (e) => {
    console.log(e.target);
})
