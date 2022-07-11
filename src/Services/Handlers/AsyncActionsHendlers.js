import { REMOTE_HOST } from '../../Config/config';
import { fetchVideosAction } from '../Actions/MoviesActions';

const fetchUrl = (url, dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => dispatch(fetchVideosAction(json)));
};

export const fetchVideosFromServer = () => (dispatch) => {
  const url = `${REMOTE_HOST}movies?sortBy=release_date&sortOrder=desc`;
  fetchUrl(url, dispatch);
};

export const fetchVideosSortBy = (field) => (dispatch) => {
  const url = `${REMOTE_HOST}movies?sortBy=${field}&sortOrder=desc`;
  fetchUrl(url, dispatch);
};

export const fetchVideosFilterByGenres = (genre) => (dispatch) => {
  const url = genre === 'all' ? `${REMOTE_HOST}movies?sortBy=release_date&sortOrder=desc` : `${REMOTE_HOST}movies?filter=${genre}`;
  fetchUrl(url, dispatch);
};
