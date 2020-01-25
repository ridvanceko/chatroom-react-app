import React, { Component } from "react";
import UserInput from "../UserInput";
import Message from "../Message";
import io from "socket.io-client"

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

class ChatScreen extends Component {
<<<<<<< HEAD
    
    constructor(props){
        super(props);
        this.state = {
            conversation: this.props.conversation
        }
    }
=======
  constructor(props) {
    super(props);
    this.state = {
      conversation: this.props.conversation
    };
  }
  componentDidMount() {
    var socket = io("127.0.0.1:8081");
    console.log("socket",socket)
    socket.emit("new user connected",this.props.user)
    socket.on("news", function(data) {
      console.log(data);
      socket.emit("my other event", { my: "data" });
    });
  }
>>>>>>> aaad21dfddc43358993aa08fb809fc141065ec80

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
          <div className="card-body msg_card_body">
            {renderMeg(
              this.state.conversation,
              this.props.user_photo,
              this.props.target_photo
            )}
          </div>
          <UserInput />
        </div>
      </div>
    );
  }
}
export default ChatScreen;
