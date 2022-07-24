import React from 'react'

// components
import Progressbar from "./Progressbar"

// aos
import AOS from "aos"

const Skills = ({ skill_value, skill }) => {
    AOS.init()
    
    return (
        <div className="d-flex flex-column col-12 col-sm-6">
            <div className='align-items-center row'>
                <div className={`col-12 col-sm-11`} data-aos="fade-up">
                    <Progressbar value={skill_value} title={skill} />
                </div>
            </div>
        </div>
    )
}

export default Skills