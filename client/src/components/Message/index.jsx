import React, { Component } from 'react';

function renderMeg(is_send, meg){
    return(
        <div className={is_send ? "msg_cotainer_send" : "msg_cotainer"}>
            {meg}
            <span className={is_send ? "msg_time_send": "msg_time"}>9:00 AM, Today</span>
        </div>
    )
}

function renderPhoto(is_send, sender) {
    return(
        <div className={is_send ? "img_cont_msg_send" : "img_cont_msg"}>
            <img src={sender} className="rounded-circle user_img_msg" alt={"user.img"}/>
        </div>
    )
}

function render(sender, is_send, meg) {
    if(is_send){
        return(
            <div className={is_send ? "d-flex justify-content-end mb-4" : "d-flex justify-content-start mb-4"}>
                {renderMeg(is_send, meg)}
                {renderPhoto(is_send,sender)}
            </div>
        )
    }else {
        return(
            <div className={is_send ? "d-flex justify-content-end mb-4" : "d-flex justify-content-start mb-4"}>
                {renderPhoto(is_send, sender)}
                {renderMeg(is_send, meg)}
            </div>
        )
    }
}

export default class Message extends Component{
        render() {
            return(
                <div>
                    {render(this.props.sender,this.props.is_send,this.props.meg)}
                </div>
            )
        }
}