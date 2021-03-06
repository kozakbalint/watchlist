import React, { useState } from "react";
import { ResultCardShow } from "./ResultCardShow";

export const AddShow = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search a show"
              value={query}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((show) => (
                <li key={show.id}>
                  <ResultCardShow show={show} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
