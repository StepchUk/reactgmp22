import { toCamelCase } from '../Utils/utils';
import { FETCH_VIDEOS } from '../Constants/ActionTypes';

const defaultState = {
  videos: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return { ...state, videos: toCamelCase(action.payload.data) };
    default:
      return state;
  }
};
