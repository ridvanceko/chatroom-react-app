import React, { Component } from "react";

export default class MessageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (



      <li>

<div className="card" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">{this.props.sender}</h5>
   <p className="card-text">{this.props.msg}</p>
    </div>
</div> 
        
      </li>



    );
  }
}


 