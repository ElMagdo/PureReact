import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function AddressLabel({label}) {
  return (
    <div className="label">
      <Name fullName={label.fullName}/>
    </div>
  );
}

AddressLabel.propTypes = {
  person: PropTypes.object.isRequired
}

let person = {
  fullName: "Full Name",
  address: {
    street: "123 Fake St.",
    city: "Boston",
    postalCode: "MA 02118"
  }
};

let Name = (fullName) => (<div className="names">{fullName}</div>);

Name.propTypes = {
  fullName: PropTypes.string.isRequired
}

ReactDOM.render(<AddressLabel label={person}/>, document.querySelector('#root'));