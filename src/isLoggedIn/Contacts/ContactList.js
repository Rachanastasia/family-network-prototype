import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import DisplayContacts from './DisplayContacts';

function ContactList(props) {
    // console.log(props.members);
    console.log(props.medicalContacts.contact);
    // spec and title for relation to patient
    return (
        <section>

            <Link to={'/'}>
                <AiOutlineClose className='goBack' />
            </Link>
            <h1>Contacts</h1>
            <DisplayContacts name={props.medicalContacts} />
            {/* <DisplayContacts /> */}
        </section>
    )
}

export default ContactList
