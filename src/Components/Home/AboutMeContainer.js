import React, { useContext } from 'react'

// context
import { DataContext } from '../../Context/DataContextProvider'

// components
import AboutMe from './AboutMe'

// data
import { AboutData } from '../../Data/AboutData'

const AboutMeContainer = () => {
    const { state } = useContext(DataContext);

    return (
        <>
            {AboutData[state.language].map((item, index) =>
                <AboutMe description={item.description}
                    key={index}
                    title={item.title}
                    titleDes={item.titleDes}
                    ability={item.ability}
                    btn1={item.btn1}
                />
            )}

        </>
    )
}


export default AboutMeContainer