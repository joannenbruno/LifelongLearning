import React, { Component } from 'react';

import Contact from './Contact.js';

class ContactList extends Component {
    
    render() {
        return (
            <div>
            <Contact name="Jeremy" email="jcantu521@gmail.com" phone="9562868386" address="11011 Domain Drive" ></Contact>
            </div>
        );
    }
}

export default ContactList;