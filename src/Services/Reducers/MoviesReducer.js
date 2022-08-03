import {
  FETCH_VIDEOS,
  SET_VIDEO,
  SET_SORT_BY,
  SET_GENRES,
  SET_FORM_REQUEST,
} from '../Constants/ActionTypes';
import { GENRES, SORT_TYPES } from '../../Constants';

const defaultState = {
  videos: [],
  video: {},
  sortBy: SORT_TYPES[0],
  genre: GENRES[0],
  request: {
    isRunnig: false,
    isFinished: false,
    error: undefined,
  },
};

export default (state = defaultState, action) => {
  const { payload } = action;

  switch (action.type) {
    case FETCH_VIDEOS:
      return { ...state, videos: payload.data };
    case SET_VIDEO:
      return { ...state, video: payload };
    case SET_SORT_BY:
      return { ...state, sortBy: payload };
    case SET_GENRES:
      return { ...state, genre: payload };
    case SET_FORM_REQUEST:
      return { ...state, request: payload };
    default:
      return state;
  }
};
