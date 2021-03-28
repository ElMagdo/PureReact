import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({children}) => (
    <div className="navbar">
        Am at the TOP
        <span className="ryt">{children}</span>
    </div>
);

export default Navbar;