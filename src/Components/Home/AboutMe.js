import React, { useContext } from 'react'

// context
import { DataContext } from '../../Context/DataContextProvider'

// components
import HeadTitle from '../Other/HeadTitle';

// css
import styles from "./aboutMe.module.css"

// image
import myImg from "../../assets/images/img2.jpg"

const AboutMe = ({ titleDes, title, description, ability, btn1 }) => {
    const { state } = useContext(DataContext);

    return (
        <div className={`m-0 text-capitalize`}>
            <HeadTitle title={title} />
            <div className={`row`}>
                <div className={`col-5`}>
                    <div className={`${styles.img_container} 
                    ${state.darkMode ? `${styles.dark_shadow}` : `${styles.light_shadow}`}`}>
                        <img className='img-fluid' src={myImg} alt="erfan sormi" />
                    </div>
                </div>

                <div className={`col-7 ${styles.about_description_container}`}>
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
                        <button className='btn btn-orange'>
                            {btn1}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe