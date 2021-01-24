import React, { useReducer } from "react";
import { render } from "react-dom";
import App from "./components/App";
import "antd/dist/antd.less";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
const { GITHUB_API_KEY } = process.env;

const initialState = {
  region: null,
};

export const StoreContext = React.createContext([]);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_REGION":
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
};

import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";

import { Form, Report } from "./components/Aquaponic";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${GITHUB_API_KEY}`,
  },
});
const rootEl = document.getElementById("app");

const Root = () => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={[appState, dispatch]}>
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/report" component={Report} />
        </Switch>
      </Router>
    </StoreContext.Provider>
  );
};

render(<Root />, rootEl);
