import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCardMovie = ({ movie }) => {
  const { addMovie, watchlist } = useContext(GlobalContext);

  let stored = watchlist.find((o) => o.id === movie.id);

  const watchlistDisabled = stored ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : ""}
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            onClick={() => addMovie(movie)}
            disabled={watchlistDisabled}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};
