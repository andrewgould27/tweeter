import React, { Component } from "react";

export class Tweet extends Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return (
            <>
            <div className="tweet">
                <h5 className="is-size-5">@{this.props.email}</h5> 
                <h5 className="is-size-3">{ this.props.content }</h5>
                <h5 className="is-size-5 has-text-right">{ this.props.time }</h5>
            </div>
            </>
        )
    }
};