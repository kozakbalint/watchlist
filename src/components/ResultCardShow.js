import React from "react";

export const ResultCardShow = ({ show }) => {
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {show.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`}
            alt={`${show.name} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{show.name}</h3>
          <h4 className="release-date">
            {show.release_date ? show.release_date.substring(0, 4) : ""}
          </h4>
        </div>
        <div className="controls">
          <button className="btn">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};
