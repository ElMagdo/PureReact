import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({buttons}) => (
<div className="buttons">
    <ReplyButton/>
    <RetweetButton/>
    <MoreOptionsButton/>
</div>
);

Buttons.propTypes = {
    buttons: PropTypes.object.isRequired
}

const ReplyButton = () => <i className="fa fa-reply reply-button"/>;

const RetweetButton = () => (
<i className="fa fa-retweet retweet-button"/>
);

const MoreOptionsButton = () => <i className="fa fa-ellipsis-h more-options-button"/>;

export default Buttons;