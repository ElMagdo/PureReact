import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './goblin.png'
//import moment from 'moment';

function Tweet({tweet}) {
  return (
  <div className="tweet">
    <Avatar hash={tweet.gravatar}/>
    <div className="content">
      <NameWithHandle author={tweet.author}/>
      <Time time={tweet.timestamp}/>
      <Message text={tweet.message}/>
      <div className="buttons">
        <ReplyButton/>
        <RetweetButton count={tweet.retweets}/>
        <LikeButton count={tweet.likes}/>
        <MoreOptionsButton/>
      </div>
    </div>
  </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
}

var testTweet = {
message: "Something about cats.",
gravatar: "xyz",
author: {handle: "catperson", name: "IAMA Cat Person"},
likes: 5,
retweets: 2,
timestamp: "2016-07-30 21:24:37"
};

function Avatar({ hash }) {
  //var url = `https://www.gravatar.com/avatar/${hash}`;
  return (<img src={logo} className="avatar" alt="avatar" />);
}

Avatar.propTypes = {
hash: PropTypes.number
};

function Message({ text }) {
  return (<div className="message">{text}</div>);
}

Message.propTypes = {
text: PropTypes.string
};

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
  <span className="namewith-handle">
    <span className="name">{name}</span>
    <span className="handle">@{handle}</span>
  </span>
  );
}

NameWithHandle.propTypes = {
author: PropTypes.shape({
name: PropTypes.string.isRequired,
handle: PropTypes.string.isRequired
}).isRequired
};

const Time = ({ time }) => {
  const timeString = time;//moment(time).fromNow();
  return (<span className="time">{timeString}</span>);
};

Time.propTypes = {
time: PropTypes.string
};

const ReplyButton = () => (<i className="fa fa-reply reply-button"/>);

function getRetweetCount(count) {
  if(count > 0) {
    return (<span className="retweet-count">{count}</span>);
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
<span className="retweetbutton">
<i className="fa fa-retweet"/>
{getRetweetCount(count)}
</span>
);

RetweetButton.propTypes = {
count: PropTypes.number
};

const LikeButton = ({ count }) => (
<span className="likebutton">
  <i className="fa fa-heart"/>
  {count > 0 && <span className="like-count">{count}</span>}
</span>
);

LikeButton.propTypes = {
count: PropTypes.number
};

const MoreOptionsButton = () => (
<i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));