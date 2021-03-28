import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({children}) => (
    <div className="navbar">
        <span className="logo">Y</span>
        <span className="logo-name">Hacker News</span>
        <span className="ryt">{children}</span>
    </div>
);

Navbar.propTypes = {
    children: PropTypes.node.isRequired
}

export default Navbar;