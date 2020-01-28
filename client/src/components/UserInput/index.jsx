import React, { Component } from "react";

export default class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { messageText: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ messageText: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.socket.emit("sent message", this.state.messageText);
    this.props.handleMessages(this.state.messageText);
    this.setState({ messageText: "" });
  }

  render() {
    return (
      <div className="card-footer">
        <div className="input-group">
          {/* <div className="input-group-append">
                        <span className="input-group-text attach_btn"><i className="fas fa-paperclip"/></span>
                    </div> */}
          <form className="input-group" onSubmit={this.handleSubmit}>
            <textarea
              name="messageText"
              value={this.state.messageText}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              className="form-control type_msg"
              placeholder="Type your message..."
            />
            <div className="input-group-append">
              <span className="input-group-text send_btn">
                <i
                  onClick={this.handleSubmit}
                  className="fas fa-location-arrow"
                />
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
