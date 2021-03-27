import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Time = ({time}) => 
<span className="time">
    {moment({time}).fromNow()}
</span>;

Time.propTypes = {
    time: PropTypes.string.isRequired
}

export default Time;