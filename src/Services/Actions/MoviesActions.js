import {
  FETCH_VIDEOS,
  SET_SORT_BY,
  SET_GENRES,
  SET_FORM_REQUEST,
} from '../Constants/ActionTypes';

export const fetchVideosAction = (payload) => ({ type: FETCH_VIDEOS, payload });
export const setSortByAction = (payload) => ({ type: SET_SORT_BY, payload });
export const setGenresAction = (payload) => ({ type: SET_GENRES, payload });
export const setFormRequest = (payload) => ({ type: SET_FORM_REQUEST, payload });
