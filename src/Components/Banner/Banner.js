import React, { useContext } from 'react'

//context
import { DataContext } from '../../Context/DataContextProvider'

//css
import styles from "./banner.module.css"

//data
import { BannerData } from '../../Data/BannerData'

const Banner = () => {
    const { state } = useContext(DataContext)

    return (
        <div className={`row m-0`}>
            <div className={`col-6 ${styles.banner_description}`}>
                {BannerData[state.language].map((item, index) =>
                    <div key={index} className="h-100">
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
                    </div>
                )}
            </div>
            <div className={`col-6 ${styles.img_background}`}>

            </div>
        </div>
    )
}

export default Banner