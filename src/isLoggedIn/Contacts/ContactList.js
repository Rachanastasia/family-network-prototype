import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import DisplayContacts from './DisplayContacts';
import './ContactList.css'

function ContactList(props) {
    // console.log(props.members);
    console.log(props.medicalContacts.contact);
    // spec and title for relation to patient
    return (
        <section className='contactsSection'>

            <Link to={'/'}>
                <AiOutlineClose className='goBack' />
            </Link>
            <h2>Contacts</h2>
            <div>
                <h3>Medical Contacts</h3>
                <DisplayContacts name={props.medicalContacts} />
            </div>
            <div>
                <h3>Network Contacts</h3>
                {/* <DisplayContacts /> */}
            </div>
        </section>
    )
}

export default ContactList
