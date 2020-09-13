import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorOverview.css'
import { AiOutlinePhone } from 'react-icons/ai'

function DoctorOverview(props) {

    const doctors = props.medicalContacts.slice(0, 2).map(obj =>
        <div className='row'><p>{obj.contact}</p><AiOutlinePhone /><p>{obj.spec}</p></div>
    )
    return (
        <section className='doctorOverview'>
            {doctors}
            <Link to={'/contacts'}>View all medical contacts</Link>
        </section>
    )
}

export default DoctorOverview
