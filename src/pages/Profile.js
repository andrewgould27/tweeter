import firebase from "firebase";
import { auth, db } from "../services/firebase";
import React, { Component } from "react";
import { Tweet } from "../components/Tweet.js";
import '../bulma.min.css';
import { Link } from "react-router-dom";
import { signout } from "../helpers/auth";
import '../styles.css';

export default class Profile extends Component
{
    constructor (props)
    {
        super(props);

        this.state = {
            username: this.props.match.params['username'],
            loadingChats: true,
            accountExists: false,
            chats: [],
            readError: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.myRef = React.createRef();
    }

    handleChange()
    {

    }

    async componentDidMount()
    {
        let tweetRef = firebase.database().ref("chats");
        let self = this;
        tweetRef.orderByChild("username").equalTo(this.state.username).on("value", function (snapshot) {
            let chats = [];
            snapshot.forEach((snap) => {
                chats.push(snap.val());
            });
            self.setState({ chats });
        });
    }

    render()
    {
        console.log(this.state);
        return (
        <>
            <div className="container">
                <h1 className="is-size-3">{this.state.username}</h1>
                <Link to="/feed" className="button is-info">Back to Feed</Link>
                { this.state.chats.map(chat => {
                    let date = new Date(chat.timestamp);
                    let time = (date.getHours() % 12) + ":" + (date.getMinutes()<10?'0':'') + ' ' + (date.getHours()>=12?'PM':'AM');
                    date = date.toString();
                    return <Tweet time={time} content={chat.content} username={chat.username} />
                })}
            </div>
        </>
        );
    }
}