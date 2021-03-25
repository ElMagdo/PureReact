import React from 'react';
import PropTypes from 'prop-types';

let Message = ({commit}) => <div className="commit-msg">{commit.message}</div>;

export default Message;