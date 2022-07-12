import { REMOTE_HOST } from '../../Config/config';
import { fetchVideosAction } from '../Actions/MoviesActions';

const DEFAULT_SORTBY = 'release_date';
const DEFAULT_GENRE = '';

const fetchUrl = (url, dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => dispatch(fetchVideosAction(json)));
};

export const fetchVideosFromServer = (
  sort = DEFAULT_SORTBY,
  genre = DEFAULT_GENRE,
) => (dispatch) => {
  const url = `${REMOTE_HOST}movies?sortBy=${sort}&filter=${genre === 'all' ? '' : genre}&sortOrder=desc`;
  fetchUrl(url, dispatch);
};
