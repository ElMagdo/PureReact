import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Nav({children}) {
    React.Children.forEach(
        children,
        (child) => {
            if (child.type !== NavItem) console.error("Wrong child type, Change it FAST!!!");
    });
    
    return (
        <div className="nav-ui">{children}</div>
    );
}

Nav.propTypes = {
    children: PropTypes.node
}

let NavItem = ({url, children}) => <a href={url}> {children} </a>;

NavItem.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]).isRequired
}

ReactDOM.render(
    <Nav>
        <NavItem url="/"> Home </NavItem>
        <NavItem url="/Contact"> Contact </NavItem>
        <NavItem url="/About"> About </NavItem>
    </Nav>,
    document.querySelector("#root")
);