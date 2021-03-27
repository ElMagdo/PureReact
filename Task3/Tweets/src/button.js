import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({buttons}) => (
<div className="buttons">
    <ReplyButton/>
    <RetweetButton count={buttons.retweets}/>
    <LikeButton count={buttons.likes}/>
    <MoreOptionsButton/>
</div>
);

Buttons.propTypes = {
    buttons: PropTypes.object.isRequired
}

const ReplyButton = () => <i className="fa fa-reply reply-button"/>;

const RetweetButton = ({count}) => (
    <span className="rtwt-btn">
        <i className="fa fa-retweet"/>
        {count > 0 && <span className="count">{count}</span>}
    </span>
);

RetweetButton.propTypes = {
    count: PropTypes.number.isRequired
}

const LikeButton = ({ count }) => (
<span className="like-btn">
    <i className="fa fa-heart"/>
    {count > 0 && <span className="count">{count}</span>}
</span>
);

LikeButton.propTypes = {
    count: PropTypes.number.isRequired
}

const MoreOptionsButton = () => <i className="fa fa-ellipsis-h more-options-button"/>;

export default Buttons;