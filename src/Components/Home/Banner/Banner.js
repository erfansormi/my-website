import React, { useContext } from 'react'

//context
import { DataContext } from '../../../Context/DataContextProvider'

//css
import styles from "./banner.module.css"

//data
import { BannerData } from '../../../Data/BannerData'

// aos
import AOS from "aos"

const Banner = () => {
    const { state } = useContext(DataContext)
    AOS.init()

    return (
        <div className={`row flex-column-reverse flex-lg-row ${styles.container}`}>
            <div className={`col-lg-6 col-12 ${styles.banner_description}`} data-aos="fade-up">
                {BannerData[state.language].map((item, index) =>
                    <div key={index} className="h-100 text-capitalize">
                        <div>
                            <span>{item.text}</span>
                        </div>
                        <div>
                            <h1>{item.title}</h1>
                        </div>
                        <div>
                            <h5>{item.welcomeText}</h5>
                        </div>
                        <div>
                            <p>{item.description}</p>
                        </div>
                        <div className={"d-flex"}>
                            <div>
                                <button className='btn btn-outline-orange'>
                                    {item.btn1}
                                </button>
                            </div>
                            <div className={`${state.language == "FA" ? "me-3" : "ms-3"}`}>
                                <button className='btn btn-orange'>
                                    {item.btn2}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={`col-lg-6 col-12 ${styles.img_background} 
            ${state.darkMode && `${styles.dark_bg}`}`} data-aos="fade-up">
            </div>
        </div>
    )
}

export default Banner