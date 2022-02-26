import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import App from "../App";
import store from "../store.js";


describe("<AnecdoteList />", () => {
  it("should render items", () => {
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByText("Add anecdote:")).toBeVisible();
    expect(screen.getByText("filter")).toBeVisible();
  });
});
