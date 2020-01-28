import React, { Component } from "react";
import UserInput from "../UserInput";
import Message from "../Message";
import MessageItem from "../MessageItem";
// import axios from "axios";

function renderMeg(conversation, user, target) {
  return conversation.map(meg => {
    return (
      <Message
        sender={meg.user_is_sender ? user : target}
        is_send={meg.user_is_sender}
        meg={meg.meg}
        date={meg.date}
      />
    );
  });
}

function renderMSGitem(allMessages) {
  return allMessages.map(msg => {
  return <h1>{msg.sender.userName} -- {msg.messageText}</h1>;
  });

  // return (
  //   <MessageItem
  //     sender={sender}
  //     msg={_msg}
  //   />
  // );
}

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: this.props.conversation
    };
    // this._initSocket = this._initSocket.bind(this);
  }

  componentDidMount() {
    // ===============get user=====================
    // axios.get('/auth/user').then(response => {
    //   console.log("chat screen mount get user", response.data.user)
    // 	if (!response.data.user) {
    // 		this.setState({
    // 			user: response.data.user
    // 		})
    // 	} else {
    // 		this.setState({
    // 			user: null
    // 		})
    // 	}
    // })
    //  ==================socket ==============
  }

  render() {
    return (
      <div className="col-md-8 col-xl-6 chat">
        <div className="card">
          <div className="card-header msg_head">
            <div className="d-flex bd-highlight">
              <div className="img_cont">
                <img
                  src={this.props.target_photo}
                  className="rounded-circle user_img"
                  alt={"user.img"}
                />
                <span
                  className={
                    this.props.target_is_online
                      ? "online_icon"
                      : "online_icon offline"
                  }
                />
              </div>
              <div className="user_info">
                <span>Chat with {this.props.target_name}</span>
                <p>3 Messages</p>
              </div>
              {/* <div className="video_cam">
                                <span><i className="fas fa-video"/></span>
                                <span><i className="fas fa-phone"/></span>
                            </div> */}
            </div>
            {/* <span id="action_menu_btn"><i className="fas fa-ellipsis-v"/></span>
                        <div className="action_menu">
                            <ul>
                                <li><i className="fas fa-user-circle"/> View profile</li>
                                <li><i className="fas fa-users"/> Add to close friends</li>
                                <li><i className="fas fa-plus"/> Add to group</li>
                                <li><i className="fas fa-ban"/> Block</li>
                            </ul>
                        </div> */}
          </div>
          <div className="card-body msg_card_body">{renderMSGitem(this.props.allMessages)}</div>
          <UserInput
            handleMessages={this.props.handleMessages}
            socket={this.props.socket}
            user={this.props.user}
          />
        </div>
      </div>
    );
  }
}
export default ChatScreen;
