import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';
import Avatar from './avatar';
import 'font-awesome/css/font-awesome.min.css';
import Message from './message';
import NameHandle from './name-handle';
import Time from './time';
import Buttons from './button';

function Tweets({tweets}) {
    return <div className="tweets">
        {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>)}
    </div>
}

Tweets.propTypes = {
    tweets: PropTypes.array
}

const Tweet = ({tweet}) => (
<div className="tweet">
    <Avatar icon={tweet.gravatar}/>
    <div className="content">
        <NameHandle user={tweet.author}/><Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <Buttons buttons={tweet.buttons}/>
    </div>
</div>
);

Tweet.propTypes = {
    tweet: PropTypes.object.isRequired
}

var testTweets = [
{
    id: 0,
    message: "Something about cats.",
    gravatar: "fa-pinterest",
    author: {
        handle: "pinterest",
        name: "Pinterest"
    },
    buttons: {
        likes: 2,
        retweets: 0
    },
    timestamp: "2019-07-30 21:24:37"
},
{
    id: 1,
    message: "Something about cats.",
    gravatar: "fa-twitter",
    author: {
        handle: "twitter",
        name: "Twitter"
    },
    buttons: {
        likes: 2,
        retweets: 0
    },
    timestamp: "2020-07-30 21:24:37"
},
{
    id: 2,
    message: "Something about cats.",
    gravatar: "fa-facebook",
    author: {
        handle: "facebook",
        name: "Facebook"
    },
    buttons: {
        likes: 2,
        retweets: 0
    },
    timestamp: "2019-07-30 21:24:37"
},
{
    id: 3,
    message: "Something about cats.",
    gravatar: "fa-github",
    author: {
        handle: "github",
        name: "Github"
    },
    buttons: {
        likes: 2,
        retweets: 0
    },
    timestamp: "2019-07-30 21:24:37"
},
{
    id: 4,
    message: "Something about cats.",
    gravatar: "fa-linkedin",
    author: {
        handle: "linkedin",
        name: "LinkedIn"
    },
    buttons: {
        likes: 2,
        retweets: 0
    },
    timestamp: "2019-07-30 21:24:37"
},
{
    id: 5,
    message: "Something about cats.",
    gravatar: 'fa-html5',
    author: {
        handle: "html5",
        name: "Html5"
    },
    buttons: {
        likes: 2,
        retweets: 0
    },
    timestamp: "2019-07-30 21:24:37"
},
{
    id: 6,
    message: "Something about cats.",
    gravatar: 'fa-css3',
    author: {
        handle: "css",
        name: "Css"
    },
    buttons: {
        likes: 2,
        retweets: 0
    },
    timestamp: "2019-07-30 21:24:37"
}
];

ReactDOM.render(
    <Tweets tweets={testTweets}/>,
    document.querySelector("#root")
);