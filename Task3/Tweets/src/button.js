import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({buttons}) => (
<div className="buttons">Click here</div>
);

Buttons.propTypes = {
    buttons: PropTypes.object.isRequired
}

export default Buttons;