import { REMOTE_HOST } from '../../Config/config';
import { fetchVideosAction, setFormRequest } from '../Actions/MoviesActions';
import { trasnformToCamelCase, toSnakeCase } from '../../utils';

const statuses = [200, 201, 204];

const fetchUrl = (url, dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => dispatch(fetchVideosAction(json)));
};

export const fetchVideosFromServer = (search = '') => (dispatch, getState) => {
  const state = getState();
  const url = `${REMOTE_HOST}movies?search=${search}&searchBy=title&sortBy=${state.sortBy}&filter=${state.genre === 'all' ? '' : state.genre}&sortOrder=desc`;
  fetchUrl(url, dispatch);
};

export const fetchMovieFromServer = (id) => async (dispatch) => {
  dispatch(setFormRequest({ isRunning: true }));

  const url = `${REMOTE_HOST}movies/${id}`;
  const rawResponce = await fetch(url);

  if (rawResponce.status === 200) {
    const resultMovie = await rawResponce.json();
    dispatch(setFormRequest({ isRunning: false, isFinished: true }));
    return trasnformToCamelCase(resultMovie);
  }

  console.error(`Failed request to get movie by ${id}`);
  dispatch(setFormRequest({ isRunning: false, isFinished: true, error: `Failed request to get movie by ${id}` }));
  throw Error(rawResponce.body);
};

export const createMovie = (movie, method = 'POST') => async (dispatch) => {
  dispatch(setFormRequest({ isRunning: true }));

  const rawResponce = await fetch(`${REMOTE_HOST}movies`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method,
    body: (JSON.stringify(toSnakeCase(movie))),
  });

  if (rawResponce.status === 200 || rawResponce.status === 201) {
    dispatch(setFormRequest({ isRunning: false, isFinished: true }));
    dispatch(fetchVideosFromServer());
  } else {
    dispatch(setFormRequest({ isRunning: false, isFinished: true, error: 'Somthing went wrong with request' }));
  }

  return rawResponce.json();
};

export const deleteMovie = (id) => async (dispatch) => {
  const responce = await fetch(`${REMOTE_HOST}movies/${id}`, { method: 'DELETE' });
  if (statuses.includes(responce.status)) {
    dispatch(fetchVideosFromServer());
    return responce.json();
  }

  console.error(`Failed request to delete movie by ${id}`);
  throw Error(responce.body);
};
