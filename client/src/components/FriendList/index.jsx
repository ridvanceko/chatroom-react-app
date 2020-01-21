import React, { Component } from 'react';

function renderContacter(state, props){
   if(state){
       return state.map(contacter => {
           return(
               <li className={contacter.is_active ? "active" : ""} onClick={props.target_change.bind(this, contacter.name)}>
                   <div className="d-flex bd-highlight">
                       <div className="img_cont">
                           <img src={contacter.photo} className="rounded-circle user_img" alt={"user.img"}/>
                           <span className={contacter.is_online ? "online_icon" : "online_icon offline" }/>
                       </div>
                       <div className="user_info">
                           <span>{contacter.name}</span>
                           { contacter.is_online ? <p>Online now</p> : <p>{contacter.name} left 30 mins ago</p>}
                       </div>
                   </div>
               </li>
           )
       })
   }else{
       return(<h2>There is no any conversation...</h2>)
   }

}

class FriendList extends Component {
    constructor(props){
        super(props);
        this.state = this.props.state;
    }

    render() {
        console.log();
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
                        <ul className="contacts">
                            {renderContacter(this.state, this.props)}
                        </ul>
                    </div>
                    <div className="card-footer"/>
                </div>
            </div>
        )
    }
}
export default FriendList;
