import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Tweet extends Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        let profileUrl = "/user/@" + this.props.username;
        return (
            <>
            <div className="tweet">
                <h5 className="is-size-5"><Link to={profileUrl}>@{this.props.username}</Link></h5> 
                <h5 className="is-size-3">{ this.props.content }</h5>
                <h5 className="is-size-5 has-text-right">{ this.props.time }</h5>
            </div>
            </>
        )
    }
};