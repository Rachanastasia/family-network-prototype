import React from 'react';
import { Link } from 'react-router-dom';
import './CalendarOverview.css';


function CalendarOverview(props) {
    return (
        <section className='calendarOverview'>
            <h1>Calendar Page</h1>
            <Link to={'/calendar'}><button>Calendar</button></Link>
        </section>
    )
}

export default CalendarOverview
