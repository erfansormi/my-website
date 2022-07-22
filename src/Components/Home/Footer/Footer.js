import React, { useContext } from 'react'

// data
import { FooterData } from "../../../Data/FooterData"

// context
import { DataContext } from '../../../Context/DataContextProvider';

// css
import styles from "./footer.module.css"

const Footer = () => {
    const { state } = useContext(DataContext);

    return (
        <div className='w-100'>
            {FooterData[state.language].map((item, index) =>
                <div className={`${styles.container}`} key={index}>
                    <div>
                        <p className='m-0'>{item.text}</p>
                    </div>
                    <div className={`${styles.icons_container}`}>
                        {item.icons.map((item, index) =>
                            <div key={index}>
                                <a href={item.link} target={"_blank"}>
                                    {item.icon}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Footer