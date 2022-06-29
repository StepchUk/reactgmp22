import React from 'react';

const GENRE = ['all', 'documentary', 'comedy', 'horror', 'crime'];

function GenreFilter() {
  return (
    <div className="genre">
      {GENRE.map((genre) => <div key={genre} className="genre__item">{genre}</div>)}
    </div>
  );
}

export default GenreFilter;
