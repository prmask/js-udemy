const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
const modelCancelButton = addMovieModal.querySelector('.btn--passive');

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
}

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
}

const backdropClickHandler = () => {
  toggleMovieModal();
}

const modelCancel = () => {
  toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
modelCancelButton.addEventListener('click', modelCancel);
backdrop.addEventListener('click', backdropClickHandler);