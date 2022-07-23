import React, { useContext } from 'react'

// context
import { DataContext } from '../../../Context/DataContextProvider'

// components
import HeadTitle from '../../Other/HeadTitle';

// css
import styles from "./aboutMe.module.css"

// image
import myImg from "../../../assets/images/img2.jpg"

// file
import resume from "../../../assets/files/resume.pdf"

// aos
import AOS from "aos"

const AboutMe = ({ titleDes, title, description, ability, btn1 }) => {
    const { state } = useContext(DataContext);
    AOS.init()
    
    return (
        <div className={`m-0 text-capitalize d-flex flex-column`}>
            <HeadTitle title={title} />
            <div className={`row align-items-center h-100`} data-aos="fade-up">
                <div className={`col-12 my-5 m-lg-0  col-lg-5`}>
                    <div className={`${styles.img_container} 
                    ${state.darkMode ? `${styles.dark_shadow}` : `${styles.light_shadow}`}`}>
                        <img className='img-fluid' src={myImg} alt="erfan sormi" />
                    </div>
                </div>
                <div className={`col-12 my-5 m-lg-0  col-lg-7 ${styles.about_description_container}`}>
                    <div>
                        <h4>{titleDes}</h4>
                    </div>
                    <div>
                        <span>{ability}</span>
                    </div>
                    <div>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div>
                        <a href={resume} className='btn btn-orange'>
                            {btn1}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe