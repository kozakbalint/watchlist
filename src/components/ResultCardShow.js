import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCardShow = ({ show }) => {
  const { addShow, watchlist } = useContext(GlobalContext);

  let stored = watchlist.find((o) => o.id === show.id);

  const watchlistDisabled = stored ? true : false;
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
          <button
            className="btn"
            onClick={() => addShow(show)}
            disabled={watchlistDisabled}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};
