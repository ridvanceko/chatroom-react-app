import React, { Component } from 'react';

// Hard code users images
import Hamrah from "../../pages/ChatRoom/assets/images/Hamrah.png";
import Jesus from "../../pages/ChatRoom/assets/images/Jesus.png";
import Shiyu from "../../pages/ChatRoom/assets/images/shiyu.png";
import Ridvan from "../../pages/ChatRoom/assets/images/Ridvan .png";

class FriendList extends Component {
    constructor(props){
        super();
        this.state = {
            target: "",
            friends: props.Friends,
        }
    }
    render() {
        console.log(this.state.friends);
        return (
            <div className="col-md-4 col-xl-3 chat">
                <div className="card mb-sm-3 mb-md-0 contacts_card">
                    <div className="card-header">
                        <div className="input-group">
                            <input type="text" placeholder="Search..." name="" className="form-control search" />
                                <div className="input-group-prepend">
                                    <span className="input-group-text search_btn"><i className="fas fa-search"> </i></span>
                                </div>
                        </div>
                    </div>
                    <div className="card-body contacts_body">
                        <ui className="contacts">
                            <li className="active">
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                        <img src={Hamrah} className="rounded-circle user_img" alt={"user.img"}/>
                                            <span className="online_icon"/>
                                    </div>
                                    <div className="user_info">
                                        <span>Hamrah</span>
                                        <p>Hamrah is online</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                        <img src={Jesus} className="rounded-circle user_img" alt={"user.img"}/>
                                            <span className="online_icon offline"/>
                                    </div>
                                    <div className="user_info">
                                        <span>Jesus</span>
                                        <p>Jesus left 7 mins ago</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                        <img src={Ridvan} className="rounded-circle user_img" alt={"user.img"}/>
                                            <span className="online_icon"/>
                                    </div>
                                    <div className="user_info">
                                        <span>Ridvan</span>
                                        <p>Ridvan is online</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                        <img src={Shiyu} className="rounded-circle user_img" alt={"user.img"}/>
                                            <span className="online_icon offline"/>
                                    </div>
                                    <div className="user_info">
                                        <span>Shiyu</span>
                                        <p>Shiyu left 30 mins ago</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                        <img src={Jesus} className="rounded-circle user_img" alt={"user.img"}/>
                                            <span className="online_icon offline"/>
                                    </div>
                                    <div className="user_info">
                                        <span>Dario</span>
                                        <p>Dario left 10 mins ago</p>
                                    </div>
                                </div>
                            </li>
                        </ui>
                    </div>
                    <div className="card-footer"/>
                </div>
            </div>
        )
    }
}
export default FriendList;
