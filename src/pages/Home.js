import { Component } from 'react';
import { Link } from "react-router-dom";
import '../bulma.min.css';

export default class Home extends Component
{
    render()
    {
        return(
            <section className="hero is-medium is-link">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <p className="title">Welcome to Tweeter!</p>
                            <p className="subtitle">Your favorite off-brand social networking site!</p>
                            <p className="my-2">
                                Join today and start chatting with fellow Tweeters about the stuff that matters most, like what celebrities are doing.
                            </p>
                            <p className="has-text-right">
                                <a className="button is-rounded is-outlined mr-1" href="/signup">Sign-up</a>
                                <a className="button is-rounded is-outlined" href="/login">Log-in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}