export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "ADD_SHOW":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    default:
      return state;
  }
};
