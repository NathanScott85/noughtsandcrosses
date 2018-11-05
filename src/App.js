import React, { Component } from "react";
import Board from "./components/board";
import Heading from "./components/Heading";
import "./App.css";
class App extends Component {
  render() {
    return (
      <main className="App">
        <Heading name="Tic Tac Toe" />
        <div className="container">
          <Board />
        </div>
      </main>
    );
  }
}

export default App;
