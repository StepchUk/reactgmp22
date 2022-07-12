import PropTypes from 'prop-types';

const DefaultPropTypes = {
  video: {
    id: PropTypes.number,
    title: PropTypes.string,
    tagline: PropTypes.string,
    voteAverage: PropTypes.number,
    voteCount: PropTypes.number,
    releaseDate: PropTypes.string,
    posterPath: PropTypes.string,
    overview: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
  },
};

export default DefaultPropTypes;
