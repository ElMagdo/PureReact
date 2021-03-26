import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({buttons}) => (
<div className="buttons">
    <ReplyButton/>
    <RetweetButton count={buttons.retweets}/>
    <LikeButton/>
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

const LikeButton = () => (
    <i className="fa fa-heart"/>
);

const MoreOptionsButton = () => <i className="fa fa-ellipsis-h more-options-button"/>;

export default Buttons;