import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({buttons}) => (
<div className="buttons">
    <ReplyButton/>
</div>
);

Buttons.propTypes = {
    buttons: PropTypes.object.isRequired
}

const ReplyButton = () => <i className="fa fa-reply reply-button"/>;

const MoreOptionsButton = () => <i className="fa fa-ellipsis-h more-options-button"/>;

export default Buttons;