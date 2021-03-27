import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title}) => (
    <div className="title">
        <div className="left">{title}</div>
        <div className="icon">
            <i className="fa fa-ellipsis-h"/>
        </div>
    </div>
);

Title.propTypes = {
    title: PropTypes.string
}

export default Title;