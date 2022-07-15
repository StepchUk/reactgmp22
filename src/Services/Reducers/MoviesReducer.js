import { FETCH_VIDEOS, SET_SORT_BY, SET_GENRES } from '../Constants/ActionTypes';
import { GENRES, SORT_TYPES } from '../../Constants';

const defaultState = {
  videos: [],
  sortBy: SORT_TYPES[0],
  genre: GENRES[0],
};

export default (state = defaultState, action) => {
  const { payload } = action;

  switch (action.type) {
    case FETCH_VIDEOS:
      return { ...state, videos: payload.data };
    case SET_SORT_BY:
      return { ...state, sortBy: payload };
    case SET_GENRES:
      return { ...state, genre: payload };
    default:
      return state;
  }
};
