import React from 'react';
import PropTypes from 'prop-types';

const NameHandle = ({user}) => (
<span className="name-handle">
    <span className="name">{user.name}</span>
    <span className="handle">{user.handle}</span>
</span>
);

export default NameHandle;