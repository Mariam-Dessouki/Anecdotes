import React from "react";
// import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const NewAnecdote = (props) => {
  // const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.createAnecdote(content);
    props.setNotification("New anecdote '" + content + "' created", 5);
  };

  return (
    <form onSubmit={addAnecdote}>
      <br />
      Add anecdote:
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  );
};

// export default NewAnecdote;
const mapDispatchToProps = {
  createAnecdote,
  setNotification,
};

export default connect(null, mapDispatchToProps)(NewAnecdote);
