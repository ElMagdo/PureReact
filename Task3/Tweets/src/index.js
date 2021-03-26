import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';
import Avatar from './avatar';
import 'font-awesome/css/font-awesome.min.css';
import Message from './message';
import NameHandle from './name-handle';

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
        <NameHandle user={tweet.author}/>
        <Message text={tweet.message}/>
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
    gravatar: "heart",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    buttons: {
        likes: 2,
        retweets: 0,
        timestamp: "2016-07-30 21:24:37"
    }
},
{
    id: 1,
    message: "Something about cats.",
    gravatar: "twitter",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    buttons: {
        likes: 2,
        retweets: 0,
        timestamp: "2016-07-30 21:24:37"
    }
},
{
    id: 2,
    message: "Something about cats.",
    gravatar: "facebook",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    buttons: {
        likes: 2,
        retweets: 0,
        timestamp: "2016-07-30 21:24:37"
    }
},
{
    id: 3,
    message: "Something about cats.",
    gravatar: "github",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    buttons: {
        likes: 2,
        retweets: 0,
        timestamp: "2016-07-30 21:24:37"
    }
},
{
    id: 4,
    message: "Something about cats.",
    gravatar: "linkedin",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    buttons: {
        likes: 2,
        retweets: 0,
        timestamp: "2016-07-30 21:24:37"
    }
}
];

ReactDOM.render(
    <Tweets tweets={testTweets}/>,
    document.querySelector("#root")
);