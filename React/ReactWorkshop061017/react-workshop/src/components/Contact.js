import React, { Component } from 'react';

class Contact extends Component {

    render() {
        
        let {name, phone, email, address} = this.props;
        return (
            <div>
                <h1 className="User-name">{name}</h1>
                <p className="User-phone">{phone} </p>
                <p className="User-email">{email}</p>
                <p className ="User-address">{address}</p>
            </div>
        );
    }
}

export default Contact;