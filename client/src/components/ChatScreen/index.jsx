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
    // return <h3 style={{color: "#ffffff"}}>{msg.sender.userName} -- {msg.messageText}</h3>;
    return (
      <li>
      <div className="card"  style={{height: "auto"}}>
        <div className="card-body">
          <h4 style={{color: "#86A8E7"}} className="card-title">{msg.sender.userName}</h4>
          <h5 style={{color: "#ffffff"}} className="card-text">{msg.messageText}</h5>
        </div>
      </div>
      </li>
    );
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
      conversation: this.props.conversation,
      user: this.props.user,
      rediredTo: null
    };
    this.handleLogOut = this.handleLogOut.bind(this);

    // this._initSocket = this._initSocket.bind(this);
  }

  handleLogOut(event) {
    event.preventDefault();
    this.props._logout(event);

    this.setState({
      redirectTo: "/"
    });
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
              {/* <div className="img_cont">
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
              </div> */}
              <div className="user_info">
                <span>Global Chatroom</span>
              </div>
              {/* <div className="video_cam">
                                <span><i className="fas fa-video"/></span>
                                <span><i className="fas fa-phone"/></span>
                            </div> */}
            </div>
            <span id="action_menu_btn">
              <i onClick={this.handleLogOut} class="fas fa-sign-out-alt"></i>
            </span>
            {/* <i className="fas fa-ellipsis-v"/></span> */}
            {/* <div className="action_menu">
                            <ul>
                                <li><i className="fas fa-user-circle"/> View profile</li>
                                <li><i className="fas fa-users"/> Add to close friends</li>
                                <li><i className="fas fa-plus"/> Add to group</li>
                                <li><i className="fas fa-ban"/> Block</li>
                            </ul>
                        </div> */}
          </div>
          <div className="card-body msg_card_body text-right mh-100">
          <ul >
            {renderMSGitem(this.props.allMessages)}
          </ul>
          
          </div>
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
