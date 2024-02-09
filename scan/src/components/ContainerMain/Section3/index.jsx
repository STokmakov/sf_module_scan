import css from './Section3.module.css'

import img from "./main-section-3.svg"

import React from 'react';

const Section3 = () => {

    return (
        <section className={css.section}>
            <img src={img} alt="" />
        </section>
    )

}

export { Section3 }