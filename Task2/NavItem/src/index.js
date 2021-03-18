import React from 'react';
import ReactDOM from 'react-dom';

function Nav({children}) {
    return (
        <div className="nav-ui">{children}</div>
    );
}

let NavItem = ({url, children}) => <a href={url}> {children} </a>;

ReactDOM.render(
    <Nav>
        <NavItem url="/"> Home </NavItem>
        <NavItem url="/Contact"> Contact </NavItem>
        <NavItem url="/About"> About </NavItem>
    </Nav>,
    document.querySelector("#root")
);