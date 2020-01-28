import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FriendList from "../../components/FriendList";
import ChatScreen from "../../components/ChatScreen";
import "./assets/css/style.css";
import Rachel from "../../pages/ChatRoom/assets/images/Rachel.jpg";
import Shiyu from "../../pages/ChatRoom/assets/images/shiyu.png";

class ChatRoom extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            _logout:this.props._logout,
            user:this.props.user,
            redirectTo: null,
            //gonna_sent: ""  (update from input component)
            friendList: [
                {
                    name: "Rachel Cheng",
                    photo: require("../../pages/ChatRoom/assets/images/Rachel.jpg"),
                    is_active: false,
                    is_online: true
                },
                {
                    name: "Ridvan",
                    photo: require("../../pages/ChatRoom/assets/images/Ridvan .png"),
                    is_active: false,
                    is_online: true
                },
                {
                    name: "Shiyu",
                    photo: require("../../pages/ChatRoom/assets/images/shiyu.png"),
                    is_active: false,
                    is_online: true
                },
                {
                    name: "Hamrah",
                    photo: require("../../pages/ChatRoom/assets/images/Hamrah.png"),
                    is_active: false,
                    is_online: false
                },
                {
                    name: "Jesus",
                    photo: require("../../pages/ChatRoom/assets/images/Jesus.png"),
                    is_active: false,
                    is_online: false
                }
            ],
            chatScreen: {
                // user_name: "",
                // user_photo: require(""),
                // target_name: "",
                // target_photo: require(""),
                // target_is_online: false,
                // conversation: [{
                //     meg: "",
                //     user_is_sender: false,
                // }],

                user_name: "Shiyu",
                user_photo: require("../../pages/ChatRoom/assets/images/shiyu.png"),
                target_name: "Rachel",
                target_photo: require("../../pages/ChatRoom/assets/images/Rachel.jpg"),
                target_is_online: true,
                conversation: [{
                    meg: "Hey, I just want to say I LOVE YOU, Shiyu !!!",
                    user_is_sender: false,
                    date: "9:00 AM, Today"
                }, {
                    meg: "Awww, really! I love you too, my sweet heart! Do you have time on this weekend?",
                    user_is_sender: true,
                    date: "9:05 AM, Today"
                }, {
                    meg: "Hehe, I do have time on this weekend!",
                    user_is_sender: false,
                    date: "9:10 AM, Today"
                }, {
                    meg: "Great! I will see you then!!",
                    user_is_sender: true,
                    date: "9:13 AM, Today"
                },],
            }
        };
        this.target_change = this.target_change.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(event) {
        event.preventDefault();
        console.log('shi yu')
        this.props.logOut;
		this.setState({
			redirectTo: '/'
		})
	}

    componentDidMount() {
        // this.props._getAllUsers()
        this.setState({ user: this.props.user })

    }
    target_change(name) {
        this.state.friendList.forEach(friend => {
            if (friend.name === name) this.setState({ ...friend.is_active = true });
            else this.setState({ ...friend.is_active = false });
        });
    };
    render() {
        if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
        return (
            <div className={"container-fluid m-5"}>
                <div className={"row justify-content-center h-100"}>
                    <FriendList state={this.state.friendList} target_change={this.target_change} />
                    <ChatScreen user_photo={this.state.chatScreen.user_photo}
                        target_photo={this.state.chatScreen.target_photo}
                        target_is_online={this.state.chatScreen.target_is_online}
                        target_name={this.state.chatScreen.target_name}
                        conversation={this.state.chatScreen.conversation}
                        user={this.state.user}
                    />
                    <button onClick= {()=>{
                        this.props._logout;
                        this.setState({
                            redirectTo: '/'
                        })
                    }}>Log out</button>
                </div>
            </div>
        )
        }
    }
}
export default ChatRoom;
