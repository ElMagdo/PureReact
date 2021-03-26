import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

function Tweets({tweets}) {
    return <div className="tweets">Tweeter Loading... </div>
}

Tweets.propTypes = {
    tweets: PropTypes.array
}

var testTweets = [
{
    id: 0,
    message: "Something about cats.",
    gravatar: "xyz",
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
    gravatar: "xyz",
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
    gravatar: "xyz",
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
    gravatar: "xyz",
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
    gravatar: "xyz",
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