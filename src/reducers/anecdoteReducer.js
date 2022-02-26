import anecdoteService from "../services/anecdotes";

const sort = (anecdotes) => {
  anecdotes.sort(function (a, b) {
    return b.votes - a.votes;
  });
  return anecdotes;
};

const reducer = (state = [], action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case "NEW_ANECDOTE":
      return sort(state.concat(action.data));
    case "INIT_ANECDOTES":
      return sort(action.data);
    case "VOTE": {
      return sort(
        state.map((anecdote) =>
          anecdote.id !== action.data.id ? anecdote : action.data
        )
      );
    }
    default:
      return state;
  }
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote,
    });
  };
};

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.addVote(anecdote);
    dispatch({
      type: "VOTE",
      data: updatedAnecdote,
    });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    });
  };
};

export default reducer;
