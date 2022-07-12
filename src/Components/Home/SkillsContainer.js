import React, { useContext } from 'react'

// data
import { SkillData } from '../../Data/SkillsData'

// context
import { DataContext } from "../../Context/DataContextProvider"

// components
import Skills from './Skills'

const SkillsContainer = () => {
    const { state } = useContext(DataContext)

    return (
        <>
            {SkillData[state.language].map((item, index) =>
                <Skills key={index} title={item.title}
                    skill1={item.skill1}
                    skill2={item.skill2}
                    skill3={item.skill3}
                    skill4={item.skill4}
                    skill5={item.skill5}
                    skill6={item.skill6}
                    skill1_value={item.skill1_value}
                    skill2_value={item.skill2_value}
                    skill3_value={item.skill3_value}
                    skill4_value={item.skill4_value}
                    skill5_value={item.skill5_value}
                    skill6_value={item.skill6_value}
                />
            )}
        </>
    )
}

export default SkillsContainer