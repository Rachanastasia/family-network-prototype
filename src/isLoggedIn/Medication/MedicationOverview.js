import React from 'react'
import './MedicationOverview.css';
import { Link } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import MedOverviewFilter from './MedOverviewFilter'

function MedicationOverview(props) {

    const filtered = props.meds.filter(med => med.refill === false);


    // const needRefills = [...filtered].map((med, key) => {

    //     console.log(med);

    //     return (
    //         <div key={key} className='needsRefill row'>
    //             <p>{med.name}</p>
    //             <h3>Needs Refill</h3>

    //             <p>Dr. {med.contact}<AiOutlinePhone /></p>
    //         </div>

    //     )
    // });

    //make new componenet that works with this to map and return




    // let medsShown = [];
    // if (medsShown.length <= 3) {
    //     const noRefill = props.meds.filter(med => med.refill === true);
    //     const mappedNo = noRefill.map(med => <div className='row'><p>{med.name}</p><p>{med.dose}</p>{med.takeDaily === true ? <p>daily</p> : null}</div>)
    //     medsShown = [...needRefills, ...mappedNo]
    //     medsShown = medsShown.slice(0, 3)
    // } else {

    //     medsShown = [...needRefills];

    // }

    return (
        <section className='medOverview'>
            <MedOverviewFilter arr={filtered} />
        </section>
    )
}

export default MedicationOverview;
