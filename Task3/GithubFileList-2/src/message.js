import React from 'react';
import PropTypes from 'prop-types';

let Message = ({commit}) => <div className="commit-msg">{commit.message}</div>;

Message.propTypes = {
    commit: PropTypes.object.isRequired
}

export default Message;