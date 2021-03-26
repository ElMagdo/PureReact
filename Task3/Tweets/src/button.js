import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({buttons}) => (
<div className="buttons">Click here</div>
);

Buttons.propTypes = {
    buttons: PropTypes.object.isRequired
}

const ReplyButton = () => <i className="fa fa-reply reply-button"/>;

export default Buttons;