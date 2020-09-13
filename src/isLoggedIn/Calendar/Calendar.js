import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Calendar(props) {
    return (
        <section>

            <Link to={'/'}>
                <AiOutlineClose className='goBack' />
            </Link>

            <h1>This is theCalendar Page</h1>
        </section>

    )
}

export default Calendar
