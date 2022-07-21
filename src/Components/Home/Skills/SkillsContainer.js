import React, { useContext } from 'react'

// data
import { SkillData } from '../../../Data/SkillsData'

// context
import { DataContext } from "../../../Context/DataContextProvider"

// components
import Skills from './Skills'
import HeadTitle from "../../Other/HeadTitle"

const SkillsContainer = () => {
    const { state } = useContext(DataContext)

    return (
        <div className='w-100 row'>
            <HeadTitle title={SkillData[state.language][0].title} />
            {SkillData[state.language].map((item, index) =>
                <Skills key={index}
                    skill={item.skill}
                    skill_value={item.skill_value}
                />
            )}
        </div>
    )
}

export default SkillsContainer