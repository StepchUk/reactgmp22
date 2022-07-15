import { REMOTE_HOST } from '../../Config/config';
import { fetchVideosAction } from '../Actions/MoviesActions';
import { toSnakeCase } from '../Utils/utils';

const fetchUrl = (url, dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => dispatch(fetchVideosAction(json)));
};

export const fetchVideosFromServer = () => (dispatch, getState) => {
  const state = getState();
  const url = `${REMOTE_HOST}movies?sortBy=${state.sortBy}&filter=${state.genre === 'all' ? '' : state.genre}&sortOrder=desc`;
  fetchUrl(url, dispatch);
};

export const createMovie = (movie, method = 'POST') => async (dispatch) => {
  try {
    const rawResponce = await fetch(`${REMOTE_HOST}movies`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method,
      body: (JSON.stringify(toSnakeCase(movie))),
    });

    if (rawResponce.status === 200 && rawResponce.status === 201) {
      dispatch(fetchVideosFromServer());
      return rawResponce.json();
    }

    return new Error(rawResponce.json());
  } catch (e) {
    return e;
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  const responce = await fetch(`${REMOTE_HOST}movies/${id}`, { method: 'DELETE' });
  if (responce.status === 200 && responce.status === 201 && responce.status === 204) {
    dispatch(fetchVideosFromServer());
    return responce.json();
  }

  return new Error(responce.body);
};
