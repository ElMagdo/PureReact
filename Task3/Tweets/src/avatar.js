import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (icon) => (
    <div className="avatar">
        <i className={`fa fa-${icon}`}/>
    </div>
);

Avatar.propTypes = {
    icon: PropTypes.string.isRequired
}

export default Avatar;