import React, { Component } from 'react';

import Contact from './Contact.js';

class ContactList extends Component {
    
    render() {
        return (
            <div>
            <Contact name="Piper Chapman" email="piperchapman@gmail.com" phone="1234567890" address="123 Orange St" ></Contact>
            </div>
        );
    }
}

export default ContactList;