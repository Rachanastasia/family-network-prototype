import React from 'react'

import './Overview.css';
import MedicationOverview from './Medication/MedicationOverview'
import CalendarOverview from './Calendar/CalendarOverview'
import DoctorOverview from './Contacts/DoctorOverview';


function Overview(props) {

    return (
        <section className='overviewSection'>
            <DoctorOverview medicalContacts={props.state.medicalContacts} />
            <MedicationOverview meds={props.state.medications} />
            <CalendarOverview />

        </section>

    )
}

export default Overview
