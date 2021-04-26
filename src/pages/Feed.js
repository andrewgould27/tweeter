import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signout } from "../helpers/auth";
import { auth, db } from "../services/firebase";
import { Tweet } from "../components/Tweet.js";
import '../bulma.min.css';
import '../styles.css';

/**
 * Encapsulates all Tweets into one Feed object
 */
export default class Feed extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
          user: auth().currentUser,
          chats: [],
          content: '',
          readError: null,
          writeError: null,
          loadingChats: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myRef = React.createRef();
      }

    async componentDidMount() {
        document.title = "Tweeter Feed";
        this.setState({ readError: null, loadingChats: true });
        try {
          db.ref("chats").on("value", snapshot => {
            let chats = [];
            snapshot.forEach((snap) => {
              chats.push(snap.val());
            });
            chats.sort(function (a, b) { return a.timestamp - b.timestamp })
            chats.reverse();
            this.setState({ chats });
            this.setState({ loadingChats: false });
          });
        } catch (error) {
          this.setState({ readError: error.message, loadingChats: false });
        }
      }

    handleChange(event)
    {
        this.setState({
            content: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
        try {
          await db.ref("chats").push({
            content: this.state.content,
            timestamp: Date.now(),
            uid: this.state.user.uid,
            username: this.state.user.displayName
          });
          this.setState({ content: '' });
        } catch (error) {
          this.setState({ writeError: error.message });
        }
      }

    render()
    {
        return (
          <>
            <div className="container">
              <div className="columns">
                <div className="column is-4 is-offset-3">
                  <div className="container">
                    <h1 className="is-size-1 has-text-centered">Tweeter</h1>
                  </div>
                  <div className="tweets">
                    <form onSubmit={this.handleSubmit}>
                        { this.state.error ? <p>{this.state.writeError}</p> : null}
                        <div className="field has-addons is-fullwidth">
                          <div className="control is-expanded">
                            <input class="input" type="text" onChange={this.handleChange} value={this.state.content}></input>
                          </div>
                          <div className="control">
                            <button type="submiit" className="button">Send</button>
                          </div>
                        </div>
                    </form>
                      {this.state.chats.map(chat => {
                          let date = new Date(chat.timestamp);
                          let time = (date.getHours() % 12) + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes() + ' ' + (date.getHours()>=12?'PM':'AM');
                          date = date.toString();
                          return <Tweet time={time} content={chat.content} username={chat.username} />//<p key={chat.timestamp}>{time}: <strong>{chat.content}</strong> Email:<strong>{chat.useremail}</strong></p>/////////
                      })}
                  </div>
                </div>

                <div className="link-box is-2">
                  <ul>
                    <li><Link to="/feed" className="button is-info link-btn">Feed</Link></li>
                    <li><Link to={`${this.state.user.displayName}`} className="button is-info link-btn">Profile</Link></li>
                    <li><p><Link onClick={ () => signout() } className="button is-danger link-btn">Sign out</Link></p></li>
                  </ul>
                </div>
              </div>     
            </div>
            </>
        );
    }
}