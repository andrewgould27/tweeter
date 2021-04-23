import { Component } from "react";
import { useParams } from "react-router-dom";

export default class Profile extends Component
{
    constructor(props)
    {
        super(props);

        this.username = this.props.match.params['username'];

        console.log(this.username);
    }

    render()
    {
        return (
            <>
                <div className="container">
                    <h1>{ this.username }</h1>
                </div>
            </>
        );
    }
}