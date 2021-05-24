import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const startState = {
  watchlist: [],
  watched: [],
};

export const GlobalContext = createContext(startState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, startState);

  const addMovie = (movie) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{ watchlist: state.watchlist, watched: state.watched, addMovie }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
