import React from 'react';

const GENRE = ['all', 'documentary', 'comedy', 'horror', 'crime'];

const GenreFilter = () => (
    <div className="genre">
      {GENRE.map(genre => <div key={genre} className="genre__item">{genre}</div>)}
    </div>
);

export default GenreFilter;
