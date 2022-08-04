import { GENRES, SORT_TYPES } from '../../Constants';
import {
  fetchVideosAction,
  setFormRequest,
  setGenresAction,
  setSortByAction,
  setVideoAction,
} from '../Actions/MoviesActions';
import MoviesReducer from './MoviesReducer';

const payload = {
  fetchvideos: {
    totalAmount: 3000,
    data: [
      {
        id: 337167,
        title: 'Fifty Shades Freed',
        tagline: 'Don\'t miss the climax',
        vote_average: 6.1,
        vote_count: 1195,
        release_date: '2018-02-07',
        poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
        overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
        budget: 55000000,
        revenue: 136906000,
        genres: [
          'Drama',
          'Romance',
        ],
        runtime: 106,
      },
    ],
    offset: 0,
    limit: 10,
  },
  singleVideo: {
    id: 269149,
    title: 'Zootopia',
    tagline: 'Welcome to the urban jungle.',
    vote_average: 7.7,
    vote_count: 6795,
    release_date: '2016-02-11',
    poster_path: 'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
    overview: 'Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia\'s police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.',
    budget: 150000000,
    revenue: 1023784195,
    genres: [
      'Animation',
      'Adventure',
      'Family',
      'Comedy',
    ],
    runtime: 108,
  },
  sortTypeReleaseDate: SORT_TYPES[1],
  genreHorror: GENRES[3],
  requestStatusIsRunning: {
    isRunning: true,
  },
  requestStatusIsFinished: {
    isFinished: true,
  },
  requestStatusHaveError: {
    error: new Error('Test error'),
  },
};

describe('movies reducer', () => {
  it('fetch videos form server', () => {
    const action = fetchVideosAction(payload.fetchvideos);
    const result = MoviesReducer(undefined, action);

    expect(result.videos.length).toEqual(payload.fetchvideos.data.length);
    expect(result.videos).toEqual(payload.fetchvideos.data);
  });

  it('Add video to the state', () => {
    const action = setVideoAction(payload.singleVideo);
    const result = MoviesReducer(undefined, action);

    expect(result.video).toEqual(payload.singleVideo);
  });

  it('Add sort by to the state', () => {
    const action = setSortByAction(payload.sortTypeReleaseDate);
    const result = MoviesReducer(undefined, action);

    expect(result.sortBy).toEqual(payload.sortTypeReleaseDate);
  });

  it('Add genres to the state', () => {
    const action = setGenresAction(payload.genreHorror);
    const result = MoviesReducer(undefined, action);

    expect(result.genre).toEqual(payload.genreHorror);
  });

  it('Add request status is running to the state', () => {
    const action = setFormRequest(payload.requestStatusIsRunning);
    const result = MoviesReducer(undefined, action);

    expect(result.request).toEqual(payload.requestStatusIsRunning);
  });

  it('Add request status is finished to the state', () => {
    const action = setFormRequest(payload.requestStatusIsFinished);
    const result = MoviesReducer(undefined, action);

    expect(result.request).toEqual(payload.requestStatusIsFinished);
  });

  it('Add request status have error to the state', () => {
    const action = setFormRequest(payload.requestStatusHaveError);
    const result = MoviesReducer(undefined, action);

    expect(result.request).toEqual(payload.requestStatusHaveError);
  });
});
