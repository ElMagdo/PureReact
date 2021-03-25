import React from 'react';
import PropTypes from 'prop-types';

let Name = ({name}) => <span className="name">{name}</span>;

Name.propTypes = {
    name: PropTypes.string.isRequired
}

export default Name;