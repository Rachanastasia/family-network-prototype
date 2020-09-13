import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Medication(props) {
    return (
        <section>
            <Link to={'/'}>
                <AiOutlineClose className='goBack' />
            </Link>
            <h1> Medication Page</h1>
        </section>
    )
}

export default Medication
