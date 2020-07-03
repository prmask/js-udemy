const addMovieModel = document.getElementById('add-modal');
const addMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const movieModelCancelButton = addMovieModel.querySelector('.btn--passive');
const movieModelAddButton = movieModelCancelButton.nextElementSibling;
const userInputs = addMovieModel.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteConfirmation = document.getElementById('delete-modal');

const movies = [];

const toggleBackdrop = () => {
	backdrop.classList.toggle('visible');
};

const showMovieModel = () => {
	addMovieModel.classList.add('visible');
	toggleBackdrop();
};

const closeMovieModal = () => {
	addMovieModel.classList.remove('visible');
};

const closeMovieDeletionModal = () => {
		deleteConfirmation.classList.remove('visible');
		toggleBackdrop();
}

const backdropClickHandler = () => {
	closeMovieModal();
	closeMovieDeletionModal();
	clearMovieModelInput();
};

const cancelMovieModelHandler = () => {
	closeMovieModal();
	toggleBackdrop();
	clearMovieModelInput();
};

const clearMovieModelInput = () => {
	for (const inputs of userInputs) {
		inputs.value = '';
	}
};

const updateUI = () => {
  if(movies.length === 0) {
    entryTextSection.style.display = 'block';    
  }
  else {
    entryTextSection.style.display = 'none';
  }
};

const deleteMovie = movieId => {
	let movieIndex = 0;
  for(const movie of movies) {
    if(movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
	listRoot.children[movieIndex].remove();
	closeMovieDeletionModal();
  updateUI();
}

const deleteMovieHandler = movieId => {
	deleteConfirmation.classList.add('visible');
	toggleBackdrop();
	const cancelDeletionButton = deleteConfirmation.querySelector('.btn--passive');
	let confirmDeletionButton = deleteConfirmation.querySelector('.btn--danger');

	confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

	confirmDeletionButton = deleteConfirmation.querySelector('.btn--danger');


	cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);
	cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
	confirmDeletionButton.addEventListener('click', deleteMovie.bind(null, movieId));
  //deleteMovie(movieId);
}

const addNewMovieModel = (id, title, url, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${url}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
}

const addMovieModelHandler = () => {
	const titleValue = userInputs[0].value;
	const imageUrlValue = userInputs[1].value;
	const ratingValue = userInputs[2].value;

	if (
		titleValue.trim() === '' ||
		imageUrlValue.trim() === '' ||
		ratingValue.trim() === '' ||
		+ratingValue < 1 ||
		+ratingValue > 5
	) {
		alert('Please enter valid values (rating between 1 and 5).');
		return;
	}

	const newMovie = {
		id: Math.random().toString(),
		title: titleValue,
		url: imageUrlValue,
		rating: ratingValue,
	};

	movies.push(newMovie);
	console.log(movies);
	closeMovieModal();
	toggleBackdrop();
	clearMovieModelInput();
  addNewMovieModel(newMovie.id, newMovie.title, newMovie.url, newMovie.rating);
  updateUI();
};

addMovieButton.addEventListener('click', showMovieModel);
backdrop.addEventListener('click', backdropClickHandler);
movieModelCancelButton.addEventListener('click', cancelMovieModelHandler);
movieModelAddButton.addEventListener('click', addMovieModelHandler);