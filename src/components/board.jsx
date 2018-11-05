import React, { Component } from "react";
import Button from "./square";
import "./css/board.css";
class Board extends Component {
  render() {
    return (
      <div className="grid">
        <div>
          <Button />
          <Button />
          <Button />
        </div>

        <div>
          <Button />
          <Button />
          <Button />
        </div>

        <div>
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    );
  }
}

export default Board;
