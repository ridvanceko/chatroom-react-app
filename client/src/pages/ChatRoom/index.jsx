import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import FriendList from "../../components/FriendList";
import ChatScreen from "../../components/ChatScreen";
import "./assets/css/style.css";


class ChatRoom extends Component {
    constructor(props){
        super();
        this.state = {
            user: props.user,
            target: "",
            friends: ["hahaha"],
        }
    }

    render() {
        console.log(this.state.user);
            return (
                <div className={"container-fluid m-5"}>
                    <div className={"row justify-content-center h-100"}>
                        <FriendList Friends={this.state.friends}/>
                        <ChatScreen />
                    </div>
                </div>
            )
    }
}
export default ChatRoom;
