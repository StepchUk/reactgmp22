import { toCamelCase } from '../Utils';
import { FETCH_VIDEOS } from '../Constants';

const defaultState = {
  videos: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return { ...state, videos: [...toCamelCase(action.payload.data)] };
    default:
      return state;
  }
};
