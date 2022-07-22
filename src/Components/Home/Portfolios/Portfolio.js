import React, { useContext } from 'react'

// context
import { DataContext } from "../../../Context/DataContextProvider"

// css
import styles from "./portfolio.module.css"

// aos
import AOS from "aos"

const Portfolio = ({ link, img, title }) => {
    const { state } = useContext(DataContext);
    AOS.init()
    
    return (
        <section className={`col-4 g-4 ${styles.portfolio_container}`} data-aos="fade-up">
            <div className='w-100'>
                <img
                    className="img-fluid"
                    src={img}
                    alt={`mini website ${title} pic`} />
                <div className={`${styles.show_link_onHover}`}>
                    <a target={'_blank'} href={link}>{title}</a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio