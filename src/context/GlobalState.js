import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const startState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(startState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, startState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovie = (movie) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };

  const addShow = (show) => {
    dispatch({ type: "ADD_SHOW", payload: show });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovie,
        addShow,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
