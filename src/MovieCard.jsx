import React from 'react'

const MovieCard = ({ movie }) => {
  // render for every movie passed.. reusable component..
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : process.env.REACT_APP_MOVIE_DATA_ERROR_URL
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard
