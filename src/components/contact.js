import React from 'react'

import contactStyles from './contact.module.scss';


const Contact = () => {
    return (
        <section id="contact" className={contactStyles.contactWrap}>
            <div className={contactStyles.contactContainer}>
                <div className={contactStyles.contactText}>
                    <h1>Contact</h1>
                    <h2>Here is my contact</h2>
                </div>
            </div>
        </section>
    )  
}

export default Contact
