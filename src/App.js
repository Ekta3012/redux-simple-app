import React, { Component } from 'react';
import './App.css';
import AddnoteComponent from "./components/addNote";
import { createStore } from "redux";

import { Provider } from "react-redux";
import { noteReducer } from "./reducers";

const store = createStore(noteReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <AddnoteComponent/>
      </Provider>
    );
  }
}

export default App;
