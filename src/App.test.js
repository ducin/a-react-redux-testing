import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import App from "./App";

it("should render without crashing #smoke", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should render without crashing (with prop all=false) #smoke", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App all={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should match snapshot", () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
