import React from 'react';
import PropTypes from 'prop-types';

const NameHandle = ({user}) => (
<span className="name-handle">
    <span className="name">{user.name}</span>
    <span className="handle">@{user.handle}</span>
</span>
);

NameHandle.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
}

export default NameHandle;