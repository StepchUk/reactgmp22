import { fetchVideosAction } from '.';

// eslint-disable-next-line import/prefer-default-export
export const fetchVideosFromServer = () => (dispatch) => {
  fetch('http://localhost:4000/movies?sortBy=release_date&sortOrder=desc&limit=6')
    .then((response) => response.json())
    .then((json) => dispatch(fetchVideosAction(json)));
};

export const fetchVideosSortBy = (field) => (dispatch) => {
  fetch(`http://localhost:4000/movies?sortBy=${field}&sortOrder=desc&limit=6`)
    .then((response) => response.json())
    .then((json) => dispatch(fetchVideosAction(json)));
};

export const fetchVideosFilterByGenres = (genre) => (dispatch) => {
  let url = `http://localhost:4000/movies?filter=${genre}&limit=6`;

  if (genre === 'all') {
    url = 'http://localhost:4000/movies?sortBy=release_date&sortOrder=desc&limit=6';
  }

  fetch(url)
    .then((response) => response.json())
    .then((json) => dispatch(fetchVideosAction(json)));
};
