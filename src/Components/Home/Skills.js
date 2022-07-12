import React, { useContext } from 'react'

// components
import HeadTitle from "../Other/HeadTitle"
import Progressbar from "./Progressbar"

// context
import { DataContext } from '../../Context/DataContextProvider'

const Skills = ({ skill1_value, skill2_value,
    skill3_value, skill4_value,
    skill5_value, skill6_value,
    skill1, skill2, skill3,
    skill4, skill5, skill6, title }) => {

    const { state } = useContext(DataContext);

    return (
        <div className="d-flex flex-column w-100">
            <HeadTitle title={title} />
            <div className='h-100 align-items-center row'>
                <div className={`col-5 ${state.language == "FA" ? "offset-2" : ""}`}>
                    <Progressbar value={skill1_value} title={skill1} />
                    <Progressbar value={skill2_value} title={skill2} />
                    <Progressbar value={skill3_value} title={skill3} />
                </div>
                <div className={`col-5 ${state.language == "FA" ? "" : "offset-2"}`}>
                    <Progressbar value={skill4_value} title={skill4} />
                    <Progressbar value={skill5_value} title={skill5} />
                    <Progressbar value={skill6_value} title={skill6} />
                </div>
            </div>
        </div>
    )
}

export default Skills