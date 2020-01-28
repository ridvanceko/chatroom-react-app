import React, { Component } from "react";

export default class MessageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <h1>{this.props.sender}</h1>
        <h3>{this.props.msg}</h3>
      </li>
    );
  }
}
