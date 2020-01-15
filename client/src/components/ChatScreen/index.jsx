import React, { Component } from 'react';
import UserInput from "../UserInput";
import Message from "../Message";
// Hard code users images
import Hamrah from "../../pages/ChatRoom/assets/images/Hamrah.png";
import Ridvan from "../../pages/ChatRoom/assets/images/Ridvan .png";

class ChatScreen extends Component {

    render() {
        return (
            <div className="col-md-8 col-xl-6 chat">
                <div className="card">
                    <div className="card-header msg_head">
                        <div className="d-flex bd-highlight">
                            <div className="img_cont">
                                <img src={Hamrah} className="rounded-circle user_img" alt={"user.img"}/>
                                    <span className="online_icon"/>
                            </div>
                            <div className="user_info">
                                <span>Chat with Hamrah</span>
                                <p>3 Messages</p>
                            </div>
                            <div className="video_cam">
                                <span><i className="fas fa-video"/></span>
                                <span><i className="fas fa-phone"/></span>
                            </div>
                        </div>
                        <span id="action_menu_btn"><i className="fas fa-ellipsis-v"/></span>
                        <div className="action_menu">
                            <ul>
                                <li><i className="fas fa-user-circle"/> View profile</li>
                                <li><i className="fas fa-users"/> Add to close friends</li>
                                <li><i className="fas fa-plus"/> Add to group</li>
                                <li><i className="fas fa-ban"/> Block</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body msg_card_body">
                        <div className="d-flex justify-content-start mb-4">
                            <div className="img_cont_msg">
                                <img src={Hamrah} className="rounded-circle user_img_msg" alt={"user.img"}/>
                            </div>
                            <div className="msg_cotainer">
                                Hi, how are you Ridvan?
                                <span className="msg_time">8:40 AM, Today</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mb-4">
                            <div className="msg_cotainer_send">
                                Hi Hamrah i am good tnx how about you?
                                <span className="msg_time_send">8:55 AM, Today</span>
                            </div>
                            <div className="img_cont_msg">
                                <img src={Ridvan} className="rounded-circle user_img_msg" alt={"user.img"}/>
                            </div>
                        </div>
                        <Message />
                    </div>
                    <UserInput />
                </div>
            </div>
        )
    }
}
export default ChatScreen;