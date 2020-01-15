import React, { Component } from 'react';
import Hamrah from "../../pages/ChatRoom/assets/images/Hamrah.png";

export default class Message extends Component{
        render() {
            return(
                <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                        <img src={Hamrah} className="rounded-circle user_img_msg" alt={"user.img"}/>
                    </div>
                    <div className="msg_cotainer">
                        I am good too, thank you for your chat template
                        <span className="msg_time">9:00 AM, Today</span>
                    </div>
                </div>
            )
        }
}