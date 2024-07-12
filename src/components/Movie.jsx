const Movie = ({ movie }) => {
  return (
    <div
      id={movie.imdbID}
      className="card movie"
    >
      <div className="card-image waves-effect waves-block waves-light">
        {movie.Poster === "N/A" ? (
          <img
            className="activator"
            src={`https://via.placeholder.com/300x400?text=${movie.Title}`}
          />
        ) : (
          <img
            className="activator"
            src={movie.Poster}
          />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {movie.Title}
        </span>
        <p>
          {movie.Year} <span className="right">{movie.Type}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;
