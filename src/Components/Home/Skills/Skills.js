import React from 'react'

// components
import Progressbar from "./Progressbar"

const Skills = ({ skill_value, skill }) => {

    return (
        <div className="d-flex flex-column col-6">
            <div className='align-items-center row'>
                <div className={`col-11`}>
                    <Progressbar value={skill_value} title={skill} />
                </div>
            </div>
        </div>
    )
}

export default Skills