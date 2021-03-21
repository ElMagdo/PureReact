import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import PropTypes from 'prop-types';

function DialogBox({children}) {
    React.Children.forEach(
        children,
        (child) => {
            if (child.type !== Title||child.type !== Body||child.type !== Footer)
                console.error("Wrong type of child!!");
        });

    return (
        <div className="dlg">{children}</div>
    );
}

DialogBox.propTypes = {
    children: PropTypes.node.isRequired
}

let hdx = "This Is Important";
let Title = ({title}) => <div className="title">{title}</div>;

Title.propTypes = {
    title: PropTypes.string.isRequired
}

let txt = "Here is some important text or error or something.";
let Body = ({body}) => <div className="bdy">{body}</div>;

Body.propTypes = {
    body: PropTypes.string.isRequired
}

let ftx = "Close";
let Footer = ({footer}) => <button className="foot">{footer}</button>;

Footer.propTypes = {
    footer: PropTypes.string.isRequired
}

ReactDOM.render(
    <DialogBox>
        <Title title={hdx}/>
        <Body body={txt}/>
        <Footer footer={ftx}/>
    </DialogBox>,
    document.querySelector("#root")
);