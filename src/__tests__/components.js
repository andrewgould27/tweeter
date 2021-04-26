import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Tweet } from "../components/Tweet.js";
import { Feed } from "../pages/Feed.js";
import { Profile } from "../pages/Profile.js";

it('Tweet component renders successfully', () => {
    <BrowserRouter>
        <Tweet />
    </BrowserRouter>
});

it('Feed component renders successfully', () => {
    <BrowserRouter>
        <Feed />
    </BrowserRouter>
});

it('Profile component renders successfully', () => {
    <BrowserRouter>
        <Profile />
    </BrowserRouter>
});