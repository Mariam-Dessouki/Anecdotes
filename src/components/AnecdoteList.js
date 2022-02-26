import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      {anecdote.content}
      <div>
        has {anecdote.votes} <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};

const Anecdotes = () => {
  const dispatch = useDispatch();
  // const anecdotes = useSelector((state) => state.anecdotes);

  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (!filter) {
      return anecdotes;
    }
    return anecdotes.filter((anecdote) => anecdote.content.includes(filter));
  });

  const voteForAnecdote = (anecdote) => {
    dispatch(voteAnecdote(anecdote));
    dispatch(setNotification("you voted '" + anecdote.content + "'", 5));
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => voteForAnecdote(anecdote)} //() => dispatch(voteAnecdote(anecdote.id))
        />
      ))}
    </div>
  );
};

export default Anecdotes;
