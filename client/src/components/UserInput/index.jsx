import React, { Component } from 'react';

export default class UserInput extends Component{

    render() {
        return (
            <div className="card-footer">
                <div className="input-group">
                    <div className="input-group-append">
                        <span className="input-group-text attach_btn"><i className="fas fa-paperclip"/></span>
                    </div>
                    <textarea name="" className="form-control type_msg"
                              placeholder="Type your message..."/>
                    <div className="input-group-append">
                        <span className="input-group-text send_btn"><i className="fas fa-location-arrow"/></span>
                    </div>
                </div>
            </div>
        );
    }
}